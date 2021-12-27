import React from "react";
import ReactDom from "react-dom";
import App from "./App";
import Student from "./App";

class Car extends React.Component {
  render() {
    return (
      <form>
        <h1>Hello</h1>
        <p>Enter your Name:</p>
        <input type="text" />
        <submit>submit</submit>
      </form>
    );
  }
}

ReactDom.render(
  <Student name="Pradeep" age="28" salary="1234123" />,
  document.getElementById("root")
);
ReactDom.render(<Student />, document.getElementById("student"));
ReactDom.render(<Car />, document.getElementById("enquery"));

if(module.hot)
{
  module.hot.accept();
}