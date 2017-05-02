import React, { Component } from 'react';
import ReactModal from 'react-modal';


class RecipeInfo extends Component {
  render() {
    const { recipeInfo, isOpen } = this.props;

    return (
      <ReactModal
         isOpen={isOpen}
      >
      {recipeInfo}
      </ReactModal>


    );
  }
}

export default RecipeInfo;
