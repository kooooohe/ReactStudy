import React, { Component } from 'react';

//class Hello extends Component {
//  render() {
//    const num = 1;
//    return <div>Hello, {num}. world!</div>;
//  }
//}

const Profile = (props) => {
    const { name, age, love} = props.data;
    return (
        <dl>
          <dt>Name</dt><dd>{name}</dd>
          <dt>Age</dt><dd>{age}</dd>
          <dt>Love</dt><dd>{love}</dd>
        </dl>
    );
}

export default Profile;;
