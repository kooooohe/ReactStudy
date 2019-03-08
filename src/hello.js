import React, { Component } from 'react';

//class Hello extends Component {
//  render() {
//    const num = 1;
//    return <div>Hello, {num}. world!</div>;
//  }
//}

const Hello = (props) => {
    return <div>Hello, {props.name}. world!</div>;
}

export default Hello;
