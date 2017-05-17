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
      recipeCards: [
        {
          title: "Banana Bread",
          photo: "http://images.media-allrecipes.com/userphotos/560x315/713311.jpg",
          instructions: "Preheat oven to 350 degrees F (175 degrees C). Lightly grease a 9x5 inch loaf pan. In a large bowl, combine flour, baking soda and salt. In a separate bowl, cream together butter and brown sugar. Stir in eggs and mashed bananas until well blended. Stir banana mixture into flour mixture; stir just to moisten. Pour batter into prepared loaf pan. Bake in preheated oven for 60 to 65 minutes, until a toothpick inserted into center of the loaf comes out clean. Let bread cool in pan for 10 minutes, then turn out onto a wire rack."

        },
        {
          title: "Macaronni & Cheese",
          photo: "http://images.media-allrecipes.com/userphotos/560x315/4448867.jpg",
          instructions: "Preheat oven to 375 degrees F (190 degrees C). Grease an 8-inch baking dish. Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally, until tender yet firm to the bite, about 8 minutes. Drain and transfer to a large bowl; toss with 1 tablespoon rice bran oil. Combine remaining rice bran oil, soy milk, nutritional yeast, garlic, mustard, and paprika in a high-powered food processor or blender; blend until smooth and creamy. Pour soy milk mixture over elbow macaroni in the bowl; toss to mix. Pour into the prepared baking dish. Cover with aluminum foil. Bake in the preheated oven until center is bubbling, about 20 minutes."
        },
        {
          title: "Honey-Garlic Chicken Thighs",
          photo: "http://images.media-allrecipes.com/userphotos/560x315/1411947.jpg",
          instructions: "Lay chicken thighs into the bottom of a 4-quart slow cooker. Whisk soy sauce, ketchup, honey, garlic, and basil together in a bowl; pour over the chicken. Cook on Low for 6 hours."
        }
      ]
    }
  }

    buildCards() {
    return this.state.recipeCards.map(item => (
      <Card
        title= {item.title}
        photo= {item.photo}
        instructions= {item.instructions}
        cardClick={ () => {
          this.state.recipeInfoOpen = true;
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
        <RecipeInfo
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
