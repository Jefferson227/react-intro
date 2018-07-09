import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import Char from './Char/Char';

class App extends Component {
  state = { text: '' };

  changeTextHandler = (inputEl) => {
    this.setState({ text: inputEl.target.value})
  }

  removeLetterHandler = (index) => {
    const letters = this.state.text.split('');
    const newLetters = [...letters];
    newLetters.splice(index, 1);

    this.setState({ text: newLetters.join('') });
  }

  render() {
    let charArray = null;

    if (this.state.text) {
      charArray = this.state.text.split('')
                    .map((letter, index) => 
                      <Char
                        letter={letter}
                        key={index}
                        click={this.removeLetterHandler.bind(this, index)} />)
    }

    return (
      <div className="App">
        <input type="text"
          onChange={this.changeTextHandler} />

        <Validation text={this.state.text} value={this.state.text} />

        {charArray}
      </div>
    );
  }
}

export default App;
