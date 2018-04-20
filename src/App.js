import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import Human from './Human/Human';

class App extends Component {
  state = {
      name: 'James',
      hobbie: 'play guitar',
      age: 30
  };

  switchHumanHandler = () => {
      this.setState({
          name: 'a human who changed the state',
          hobbie: 'bang the head'
      });
  }

  changeNameHandler = (event) => {
    this.setState({ name: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <Person name="Jeff" age="29"/>
        <Person name="Luh" age="28"/>
        <Human
          name={this.state.name}
          age={this.state.age}
          changed={this.changeNameHandler}>{this.state.hobbie}</Human>
        <button onClick={this.switchHumanHandler}>Switch human</button>
      </div>
    );
  }
}

export default App;
