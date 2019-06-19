import React, { Component } from 'react';
import './App.css';
import Child from './components/parenttochild/child';

class App extends Component {
  letsBringToy = (username)=>{
    this.setState({
      title:username
    })
  }
  state = {
    title:'U n Me'
  }
  render() {
    return (
      <div className="App">
         <Child iwantToy={this.letsBringToy.bind(this,"He Man")} title={this.state.title}></Child> 
      </div>
    );
  }
}

export default App;
