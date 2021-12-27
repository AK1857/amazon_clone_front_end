import React from 'react'

function ChildComponent(props) {

//    greetParant(this.props)
//    {
//        alert("Wecome "+props.parantName+"from child");
//    }


    return (
        <div>
            <button onClick={()=>props.greetHandler("child")}>Child Button</button>
        </div>
    )
}

export default ChildComponent
