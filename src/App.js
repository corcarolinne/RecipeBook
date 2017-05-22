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
      recipeInfoOpen: false,
      selectedRecipe: {},
      recipeData: [
        {
          title: "Banana Bread",
          photo: "http://images.media-allrecipes.com/userphotos/560x315/713311.jpg",
          ingredients: ["2 cups all-purpose flour", "1 teaspoon baking soda", "1/4 teaspoon salt", "1/2 cup butter", "3/4 cup brown sugar", "2 eggs, beaten", "2 1/3 cups mashed overripe bananas"],
          instructions: "Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 9x5 inch loaf pan. In a large bowl, combine flour, baking soda and salt. In a separate bowl, cream together butter and brown sugar. Stir in eggs and mashed bananas until well blended. Stir banana mixture into flour mixture; stir just to moisten. Pour batter into prepared loaf pan. Bake in preheated oven for 60 to 65 minutes, until a toothpick inserted into center of the loaf comes out clean. Let bread cool in pan for 10 minutes, then turn out onto a wire rack.",
          prep: "1h20",
          price: "$5",
          serves: "12",
          type: "Vegetarian"
        },
        {
          title: "Macaronni & Cheese",
          photo: "http://images.media-allrecipes.com/userphotos/560x315/4448867.jpg",
          ingredients: ["1 (8 ounce) package elbow macaroni", "2/3 cup rice bran oil, divided", "2 cups unsweetened soy milk", "1 cup nutritional yeast", "4 cloves garlic, minced", "2 teaspoons yellow mustard", "1 teaspoon ground paprika"],
          instructions: "Preheat oven to 375 degrees F (190 degrees C). Grease an 8-inch baking dish. Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally, until tender yet firm to the bite, about 8 minutes. Drain and transfer to a large bowl; toss with 1 tablespoon rice bran oil. Combine remaining rice bran oil, soy milk, nutritional yeast, garlic, mustard, and paprika in a high-powered food processor or blender; blend until smooth and creamy. Pour soy milk mixture over elbow macaroni in the bowl; toss to mix. Pour into the prepared baking dish. Cover with aluminum foil. Bake in the preheated oven until center is bubbling, about 20 minutes.",
          prep: "40min",
          price: "$10",
          serves: "8",
          type: "Vegan"
        },
        {
          title: "Honey-Garlic Chicken Thighs",
          ingredients: ["4 skinless, boneless chicken thighs", "1/2 cup soy sauce", "1/2 cup ketchup", "1/3 cup honey", "3 cloves garlic, minced", "1 teaspoon dried basil"],
          photo: "http://images.media-allrecipes.com/userphotos/560x315/1411947.jpg",
          instructions: "Lay chicken thighs into the bottom of a 4-quart slow cooker. Whisk soy sauce, ketchup, honey, garlic, and basil together in a bowl; pour over the chicken. Cook on Low for 6 hours.",
          prep: "6h10",
          price: "$20",
          serves: "4",
          type: "Meat"
        }
      ]
    }
  }

    buildCards() {
    return this.state.recipeData.map(item => (
      <Card
        title= {item.title}
        photo= {item.photo}
        cardClick={ () => {
          this.state.recipeInfoOpen = true;
          this.state.selectedRecipe = item;
          this.setState(this.state);
         }}
      />
    ));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logoRecipeBook} className="App-logo" alt="logo of a pink donut spinning" />
          <h2 className="App-title">Recipe Book</h2>
        </div>
        <div className="Register-button">Register your Recipe!</div>
        <i className="material-icons">add_circle</i>
        <RecipeInfo
          title= {this.state.selectedRecipe.title}
          photo= {this.state.selectedRecipe.photo}
          ingredients= {this.state.selectedRecipe.ingredients}
          instructions= {this.state.selectedRecipe.instructions}
          prep= {this.state.selectedRecipe.prep}
          price= {this.state.selectedRecipe.price}
          serves= {this.state.selectedRecipe.serves}
          type= {this.state.selectedRecipe.type}
          isOpen={this.state.recipeInfoOpen}
          closeModal={ () => {
            this.state.recipeInfoOpen = false;
            this.setState(this.state);
           }}
          exitButtonLabel="Exit"
          editButtonLabel="Edit"
          deleteButtonLabel="Delete"
        />
        <Grid>
          {this.buildCards()}
        </Grid>
      </div>
    );
  }
}

export default App;
