import React from 'react'

function ListItem() {

    const name=['Ashish',"adarsh","kuldeep"];

    const listedName=name.map(myname=> <div><h1>{myname}</h1></div>);

    return (
        <div>
           {  listedName}
        </div>
    )
}

export default ListItem
