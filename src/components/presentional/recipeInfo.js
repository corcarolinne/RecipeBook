import React, { Component } from 'react';
import ReactModal from 'react-modal';
import List from './list';
import IngredientRow from './ingredientRow';
import Grid from './grid';
import IconAndInput from './iconAndInput';


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
            <Grid className="Grid-recipe-info">
              <IconAndInput icon="timer" title="Prep:" input="40min"/>
              <IconAndInput icon="attach_money" title="Price:" input="US$ 20"/>
              <IconAndInput icon="room_service" title="Serves:" input="8 portions"/>
              <IconAndInput icon="local_dining" input="Vegan"/>

            </Grid>
          </div>
          <div className="Div-title-text">
            <div className="Title"> <i>{title}</i> </div>
            <div className="Div-list-intructions">
              <List>
                <IngredientRow ingredient="1/2 of one Trader Joe’s garlic-herb pizza crust"/>
                <IngredientRow ingredient="1/2 of one Trader Joe’s garlic-herb pizza crust"/>
                <IngredientRow ingredient="1/2 of one Trader Joe’s garlic-herb pizza crust"/>
                <IngredientRow ingredient="1/2 of one Trader Joe’s garlic-herb pizza crust"/>
                <IngredientRow ingredient="1/2 of one Trader Joe’s garlic-herb pizza crust"/>
                <IngredientRow ingredient="1/2 of one Trader Joe’s garlic-herb pizza crust"/>
                <IngredientRow ingredient="1/2 of one Trader Joe’s garlic-herb pizza crust"/>
                <IngredientRow ingredient="1/2 of one Trader Joe’s garlic-herb pizza crust"/>
                <IngredientRow ingredient="1/2 of one Trader Joe’s garlic-herb pizza crust"/>
                <IngredientRow ingredient="1/2 of one Trader Joe’s garlic-herb pizza crust"/>
                <IngredientRow ingredient="1/2 of one Trader Joe’s garlic-herb pizza crust"/>
                <IngredientRow ingredient="1/2 of one Trader Joe’s garlic-herb pizza crust"/>

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
      </ReactModal>


    );
  }
}

export default RecipeInfo;
