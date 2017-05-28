import React, { Component } from 'react';


class IngredientRow extends Component {
  render() {
    const {
      ingredient,
      isEditing,
      onChange
    } = this.props;

    return (
      <div className="Ingredient-row">
        <i className="material-icons">chevron_right</i>
        {
          isEditing ?
            <input value={ingredient} onChange={onChange}/> :
            ingredient
        }
      </div>
    );
  }
}

export default IngredientRow;
