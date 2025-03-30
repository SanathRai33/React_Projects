import React, { Component } from 'react';
import './App.css';
import Card from './component/card'
import club from './images/club.png'
import spade from './images/spade.jpg'
import diamond from './images/diamond.png'
import heart from './images/heart.jpg'
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='king'>
          <Card name="King" suite="Diamond" image={diamond}/>
        </div>
        <div className='queen'>
          <Card name="Queen" suite="Spade" image={spade} />
        </div>
        <div className='jack'>
          <Card name="Jack" suite="Club" image={club}  />
        </div>
        <div className='ace'>
          <Card name="Ace" suite="Heart" image={heart} />
        </div>
      </div>
    );
  }
}

export default App;
