import React, { Component } from 'react';


class IngredientRow extends Component {
  render() {
    const {
      ingredient,
    } = this.props;

    return (
      <div className="Ingredient-row">
        <i className="material-icons">chevron_right</i>
        {ingredient}
      </div>
    );
  }
}

export default IngredientRow;
