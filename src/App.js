import React, { Component } from 'react';
import logoRecipeBook from './logoRecipeBook.png'
import './App.css';
import Grid from './components/presentional/grid';
import Card from './components/presentional/card';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logoRecipeBook} className="App-logo" alt="logo of a pink donut spinning" />
          <h2 id="title">Recipe Book</h2>
        </div>
        <div className="Div-button">Register your Recipe!</div>
        <Grid>
          <Card
            cardClick={ () => {alert("RecipeInfo")}}
            title="Vegan Pizza"
            photo="http://www.besthealthmag.ca/wp-content/uploads/2016/01/vegan-meal-plan-pizza.jpg"
          />
          <Card title="Recipe" />
          <Card title="Recipe" />
          <Card title="Recipe" />
          <Card title="Recipe" />
          <Card title="Recipe" />
          <Card title="Recipe" />
          <Card title="Recipe" />
          <Card title="Recipe" />
          <Card title="Recipe" />
          <Card title="Recipe" />
        </Grid>
      </div>
    );
  }
}

export default App;
