import React, { Component } from 'react';


class IngredientRow extends Component {
  render() {
    const {
      ingredient,
      isEditing
    } = this.props;

    return (
      <div className="Ingredient-row">
        <i className="material-icons">chevron_right</i>
        {
          isEditing ?
            <input value={ingredient}/> : 
            ingredient
        }
      </div>
    );
  }
}

export default IngredientRow;
