import React from 'react';


// function Greet(){
//     return <h1>Greeting function call</h1>
// }

const Greet =(props)=>{
    console.log(props)
    return <h1 className={props.className}>Hello {props.name}</h1>
}

export default Greet;