import React,{Component} from "react";


class Message extends Component{

    constructor(){
     super()
        this.state={
            Message:"Welcome Visitar"
        }
    }

    changeMessage(){
        this.setState({
            Message:'Thanks for subscribe'
        })
    }



    

    render()
    {
        return(
            <div>
                <h2> {this.state.Message}</h2>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
            );
    }
}

export default Message;