import React, { Component } from 'react'

 class Form extends Component {
    constructor(props){
        super(props);

        this.state={
            userName:"",
            comment:"",
            topic:"reactJs"
        }
    }

handleUserNameChange=(event)=>{

   this.setState({
       userName:event.target.value,
   })

}
handleComment=(event)=>{
    this.setState({
        comment:event.target.value
    })
}

handleTopic=(event)=>{
    this.setState({
        topic:event.target.value
    })
}

handleSubmit=event=>{
  alert(`${this.state.userName} ${this.state.comment} ${this.state.topic}`);
  event.preventDefault();
}

    render() {
        return (
            <div>
               <form onSubmit={this.handleSubmit}>
                   <label>User name:</label>
                   <input type="text" value={this.state.userName} onChange={this.handleUserNameChange}/> 
                   <label>Comment:</label>
                   <textarea value={this.state.comment}  onChange={this.handleComment}/>
                   <label>Topic:</label>
                   <select value={this.state.topic} onChange={this.handleTopic}>
                       <option>reactjs</option>
                       <option>AngularJs</option>
                       <option>view</option>
                   </select>

                   <button>Submit</button>
               </form>
            </div>
        )
    }
}

export default Form
