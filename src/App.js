import React, { Component } from 'react';
import logoRecipeBook from './logoRecipeBook.png'
import './App.css';
import Grid from './components/presentional/grid';
import Card from './components/presentional/card';
import RecipeInfo from './components/presentional/recipeInfo';

class App extends Component {

  constructor() {
    super();
    this.state = {
      recipeInfoOpen: false
    }
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logoRecipeBook} className="App-logo" alt="logo of a pink donut spinning" />
          <h2 id="title">Recipe Book</h2>
        </div>
        <div className="Div-button">Register your Recipe!</div>
        <RecipeInfo
          isOpen={this.state.recipeInfoOpen}
        />
        <Grid>
          <Card
            cardClick={ () => {
              this.state.recipeInfoOpen = true;
              this.setState(this.state);
             }}
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
