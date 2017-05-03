import React, { Component } from 'react';
import ReactModal from 'react-modal';


class RecipeInfo extends Component {
  render() {
    const {
      isOpen,
      title,
      photo,
      instructions,
      list,
      exitButtonLabel,
      editButtonLabel,
      deleteButtonLabel} = this.props;

    return (
      <ReactModal

        isOpen={isOpen}
      >
        <div className="Div-recipe-info">
          <img className="Div-img-container" src={photo} height="300" width="300"/>
          <div className="Div-title"> <i>{title}</i> </div>
          <p>{list}</p>
          <div className="Div-instructions"> {instructions} </div>
        </div>

        <button type="button">{exitButtonLabel}</button>
        <button type="button">{editButtonLabel}</button>
        <button type="button">{deleteButtonLabel}</button>

      </ReactModal>


    );
  }
}

export default RecipeInfo;
