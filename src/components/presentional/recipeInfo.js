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
      deleteButtonLabel,
      closeModal} = this.props;

    return (
      <ReactModal

        isOpen={isOpen}
      >
        <div className="Div-recipe-info">
          <div className="Close-button" onClick={closeModal}>✖</div>
          <div className="Div-photo-icons">
            <img className="Photo" src={photo} height="300" width="300"/>
          </div>
          <div className="Div-title-text">
            <div className="Title"> <i>{title}</i> </div>
            <div className="Div-list-intructions">
              <div className="List">{list}</div>
              <div className="Instructions"> {instructions} </div>
            </div>
            <div className="Buttons">
              <button className="button" type="button">{editButtonLabel}</button>
              <button className="button" type="button">{deleteButtonLabel}</button>
            </div>
          </div>
        </div>
      </ReactModal>


    );
  }
}

export default RecipeInfo;
