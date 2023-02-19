import React from 'react';
import './style.css';

function MyComponent() {
  return <input value="Something" />;
}
export default class App extends React.Component {
  constructor(props) {
    super(props);
    //this.text=React.createRef();
  }
  getValue = ()=> console.log(this.refs.xxx.value);
  render() {
    return (
      <>
        <MyComponent ref="xxx" onClick={this.getValue} />
        {/*  //we cant use like this as ,By-Default you may not use ref attribute on function based component.because,they do not have instances.  */}
       
      </>
    );
  }
}


/*


import React, {useRef} from 'react';
import './style.css';


export default function App(props) {
  const text_input=useRef(null);
    return (
      <>
        <input type="text" ref={text_input}/>
        
      </>
    );
  }

*/