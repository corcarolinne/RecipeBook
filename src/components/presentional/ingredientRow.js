import React, { Component } from 'react';


class IngredientRow extends Component {
  render() {
    const {
      ingredient
    } = this.props;

    return (
      <div className="Ingredient-row">
        <div className="Ingredient-icon"/>
        {ingredient}
      </div>
    );
  }
}

export default IngredientRow;
