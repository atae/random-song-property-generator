import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import categorizedGenres from './categorized-subset.json';
import allGenres from './genreslist.json';
import Genres from './Genres/Genres.jsx';
import Tempo from './Tempo/Tempo.jsx';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>Make some songs</h1>
      <button>Randomize Everything</button>
      <div className="pure-g">
        <div className="pure-u-1-4">
          <Genres list={allGenres}/>
        </div>
        <div className="pure-u-1-4">
          <Tempo/>
        </div>
        <div className="pure-u-1-4">
          Name and Content
        </div>
        <div className="pure-u-1-4">
          Instrumentation
        </div>
      </div>
      </div>
    );
  }
}

export default App;
