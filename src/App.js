import React, { Component } from 'react';
import logoRecipeBook from './logoRecipeBook.png'
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logoRecipeBook} className="App-logo" alt="logo" />
          <h2 id="title">Recipe Book</h2>
        </div>
        <div className="Div-button">Register your Recipe!</div>
        <div className="Div-grid">
        <div className="Div-card">Recipe</div>
        <div className="Div-card">Recipe</div>
        <div className="Div-card">Recipe</div>
        <div className="Div-card">Recipe</div>
        <div className="Div-card">Recipe</div>
        <div className="Div-card">Recipe</div>
        <div className="Div-card">Recipe</div>
        <div className="Div-card">Recipe</div>
        <div className="Div-card">Recipe</div>
        <div className="Div-card">Recipe</div>
        <div className="Div-card">Recipe</div>

        </div>
      </div>
    );
  }
}

export default App;
