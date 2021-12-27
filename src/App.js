import React, { Component } from 'react'
//import Greet from './component/Greet';
//import classDemo from './ClassDemol';
//import Welcome from './component/Welcome';
import Message from './component/Message';
import Counter from './component/Counter';
import FunctionClick from './component/FunctionClick';
import ParantComponent from './component/ParantComponent';
import ListItem from './component/ListItem';
import Form from './component/Form';
const list = [
  {
  title: 'React',
  url: 'https://reactjs.org/',
  author: 'Jordan Walke',
  num_comments: 3,
  points: 4,
  objectID: 0,
  },
  {
  title: 'Redux',
  url: 'https://redux.js.org/',
  author: 'Dan Abramov, Andrew Clark',
  num_comments: 2,
  points: 5,
  objectID: 1,
  },
  ];
  
 class App extends Component {


  render() {
  
  
    return (
        <div className="app">
          <h1> Hello React</h1>
          <Form/>
        {/* <ListItem/> */}
           {/* <ParantComponent/>     */}
          {/* <FunctionClick/> */}

          {/* <Welcome/>

          <Greet name="Ashihs" className="first" />
          <Greet name="Adarsh" className="second"/>
          <Greet name="kuldeep" className="third"/> */}

          {/* <Message/> */}
          {/* <Counter/> */}

       
        </div>
     
      );
      
  }
}

export default App;