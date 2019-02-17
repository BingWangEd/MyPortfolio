import React, {Component} from 'react';
import ReactDOM from 'react-dom';
 
import ScrollReveal from './ScrollReveal';
 
export default function Reveal(WrappedComponent) {
  return class RevealEnhancer extends Component {
  bindRef(c) {
    this.component = c;
  }
 
  componentDidMount() {
    const domElement = ReactDOM.findDOMNode(this.component);
    ScrollReveal.reveal(domElement);
  }
 
   render() {
     const that = this;
     return (
       <WrappedComponent
         ref={
           function (c) {
             that.bindRef(c);
           }
         }
         />
       );
     }
   };
}