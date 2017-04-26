import React, { Component } from 'react';
import logoRecipeBook from './logoRecipeBook.png'
import './App.css';
import Grid from './components/presentional/grid';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logoRecipeBook} className="App-logo" alt="logo" />
          <h2 id="title">Recipe Book</h2>
        </div>
        <div className="Div-button">Register your Recipe!</div>
        <Grid>
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
        </Grid>
      </div>
    );
  }
}

export default App;
