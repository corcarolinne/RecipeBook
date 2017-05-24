import React, { Component } from 'react';
import ReactModal from 'react-modal';
import List from './list';
import IngredientRow from './ingredientRow';
import Grid from './grid';
import IconAndInput from './iconAndInput';


class RecipeInfo extends Component {

  buildIngredientRow() {
    return this.props.ingredients && this.props.ingredients.map(item => (
      <IngredientRow
        ingredient= {item}
        isEditing={true}
      />
    ));
  }

  renderReadOnlyMode() {
      const {
        isOpen,
        title,
        photo,
        instructions,
        list,
        editButtonLabel,
        deleteButtonLabel,
        closeModal,
        ingredients,
        prep,
        price,
        serves,
        type
      } = this.props;

      return (
        <div className="Div-recipe-info">
          <div className="Close-button" onClick={closeModal}>✖</div>
          <div className="Div-photo-icons">
            <img className="Photo" src={photo} height="300" width="300"/>
            <Grid className="Grid-recipe-info">
              <IconAndInput icon="timer" title="Prep:" input={this.props.prep}/>
              <IconAndInput icon="attach_money" title="Price:" input={this.props.price}/>
              <IconAndInput icon="room_service" title="Serves:" input={this.props.serves}/>
              <IconAndInput icon="local_dining" input={this.props.type}/>
            </Grid>
          </div>
          <div className="Div-title-text">
            <div className="Title"> {title} </div>
            <div className="Div-list-intructions">
              <List>
                {this.buildIngredientRow()}
              </List>
              <div className="Instructions">
                <div className= "Instructions-title">Instructions</div>
                {instructions}
              </div>
            </div>
            <div className="Buttons">
              <button className="Button" type="button">{editButtonLabel}</button>
              <button className="Button" type="button">{deleteButtonLabel}</button>
            </div>
          </div>
        </div>
      );
  }

  renderAsEditMode() {
    const {
      isOpen,
      title,
      photo,
      instructions,
      list,
      editButtonLabel,
      deleteButtonLabel,
      closeModal,
      ingredients,
      prep,
      price,
      serves,
      type
    } = this.props;

    return (
      <div className="Div-recipe-info">
        <div className="Close-button" onClick={closeModal}>✖</div>
        <div className="Div-photo-icons">
          <img className="Photo" src={photo} height="300" width="300"/>
          <Grid className="Grid-recipe-info">
            <IconAndInput icon="timer" title="Prep:" input={this.props.prep}/>
            <IconAndInput icon="attach_money" title="Price:" input={this.props.price}/>
            <IconAndInput icon="room_service" title="Serves:" input={this.props.serves}/>
            <IconAndInput icon="local_dining" input={this.props.type}/>
          </Grid>
        </div>
        <div className="Div-title-text">
          <div className="Title">
            <input type="text" placeholder="Recipe Title"/>
          </div>
          <div className="Div-list-intructions">
            <List>
              {this.buildIngredientRow()}
            </List>
            <div className="Instructions">
              <div className= "Instructions-title">Instructions</div>
              <textarea placeholder="Type how to prepare!"/>
            </div>
          </div>
          <div className="Buttons">
            <button className="Button" type="button">{editButtonLabel}</button>
            <button className="Button" type="button">{deleteButtonLabel}</button>
          </div>
        </div>
      </div>
    );
  }

  render() {
    const {
      isOpen
    } = this.props;

    const isEditing = true;
    return (
      <ReactModal isOpen={isOpen}>
        {
          isEditing ?
            this.renderAsEditMode() :
            this.renderReadOnlyMode()
        }
      </ReactModal>
    )
  }
}

export default RecipeInfo;
