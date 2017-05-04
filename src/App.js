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
          closeModal={ () => {
            this.state.recipeInfoOpen = false;
            this.setState(this.state);
           }}
          title="Vegan Pizza"
          photo="http://www.besthealthmag.ca/wp-content/uploads/2016/01/vegan-meal-plan-pizza.jpg"
          list= "1/2 of one Trader Joe’s garlic-herb pizza crust
1/2 cup each Red, Green and Orange bell pepper, loosely chopped
1/3 cup red onion, chopped
1 cup button mushrooms, chopped
1/2 tsp each dried or fresh basil, oregano and garlic powder
1/4 tsp sea salt
1/2 of one Trader Joe’s garlic-herb pizza crust (or half of this homemade recipe or this gluten free recipe)
1/2 cup each Red, Green and Orange bell pepper, loosely chopped
1/3 cup red onion, chopped
1 cup button mushrooms, chopped
1/2 tsp each dried or fresh basil, oregano and garlic powder
1/4 tsp sea salt"
          instructions="Preheat oven to 425 degrees F and position a rack in the middle of the oven.
Bring large skillet to medium heat. Once hot, add 1 Tbsp olive oil, onion and peppers. Season with salt, herbs and stir. Cook until soft and slightly charred – 10-15 minutes, adding the mushrooms in the last few minutes. Set aside.
Prepare sauce by adding tomato sauce to a mixing bowl and adding seasonings and salt to taste. Adjust seasonings as needed. Set aside. Note: If using tomato paste, add water to thin until desired consistency is reached.
Prepare vegan parmesan if you haven’t already by blitzing raw cashes, sea salt, nutritional yeast and garlic powder in a food processor until a fine meal is reached. Transfer to jar and refrigerate to keep fresh.
Roll out dough onto a floured surface and transfer to a parchment-lined round baking sheet. You’re going to add the pizza WITH the parchment directly to the oven to properly crisp the crust, so any round object will do as it’s not actually going into the oven (I use a wood board).
Top with desired amount of tomato sauce (you’ll have leftovers, which you can store in a jar for later use), a sprinkle of parmesan cheese and the sautéed veggies.
Use the baking sheet to gently slide the pizza directly onto the oven rack WITH the parchment underneath. Otherwise it will fall through.
Bake for 17-20 minutes or until crisp and golden brown.
Serve with remaining parmesan cheese, dried oregano and red pepper flake. Leftovers keep well – no need to reheat! Cold pizza is yum."
          exitButtonLabel="Exit"
          editButtonLabel="Edit"
          deleteButtonLabel="Delete"
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
