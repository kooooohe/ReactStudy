import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Profile from './hello';

const taro = {
    name: 'Taro',
    age: 20,
    love: 'Game'
};
const hanako = {
    name: 'Hanako',
    age: 10,
    love: 'Cats'
};

class App extends Component {
    render() {
        return (
            <div>
                <Profile data={taro} />
                <Profile data={hanako} />
            </div>
        );
    }
}

export default App;

//ReactDOM.render(
//  <Profile name="Taro"/>,
//  document.getElementById('root')
//);
