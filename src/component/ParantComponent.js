import React, { Component } from 'react'
import ChildComponent from './ChildComponent';

class ParantComponent extends Component {

    constructor(props){
        super(props);

        this.state={
            parantName:"parant"
        }


        this.greetParant=this.greetParant.bind(this);

    }

    greetParant(childName)
    {
        alert(`Hello ${this.state.parantName} from ${childName}`);
    }


    render() {
        return (
            <div>
                <button onClick={this.greetParant}> Parant button</button>
                <ChildComponent greetHandler={this.greetParant}/>
            </div>
        )
    }
}

export default ParantComponent
