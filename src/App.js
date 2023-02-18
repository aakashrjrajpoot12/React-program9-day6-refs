import React from "react";
import "./style.css";




function MyComponent(){
  return(<input value="Something"/>);
}
export default class App extends React.Component{
  constructor(props){
    super(props);
    //this.text=React.createRef();
  }
  render(){
    console.log({this.refs.xxx.value});
    return(
      <>
      <input ref="xxx"/>      { /*No this is not a prop*/}
         
         {/*  //we cant use like this as ,By-Default you may not use ref attribute on function based component.because,they do not have instances.  */}
      </>
    );
  }
}