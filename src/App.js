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
  getValue = ()=>console.log(this.refs.xxx.value);
  render(){
   
    return(
      <>
      <input ref= "xxx" onClick={this.getValue} />
         {/*  //we cant use like this as ,By-Default you may not use ref attribute on function based component.because,they do not have instances.  */}
      </>
    );
  }
}