import React, { Component } from 'react';
import ReactModal from 'react-modal';
import List from './list';
import IngredientRow from './ingredientRow';
import Grid from './grid';
import IconAndLabel from './iconAndLabel';
import IconAndInput from './iconAndInput';



class RecipeInfo extends Component {

  constructor() {
    super();
    this.state = {
      isEditing: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      ...nextProps
    });
  }

  enableEditMode = () => this.setState({
    isEditing: true
  });

  disableEditMode = () => this.setState({
    isEditing: false
  });

  buildIngredientRow() {
    return this.state.ingredients && this.state.ingredients.map((item, index) => (
      <IngredientRow
        ingredient= {item}
        isEditing={this.state.isEditing}
        onChange={(event) => this.changeIngredientValue(event.target.value, index)}
      />
    ));
  }

  changeIngredientValue = (value, index) => {
    this.state.ingredients[index] = value;
    this.setState({
      ingredients: this.state.ingredients
    })
  }

  changeInstructionsValue = (event) => {
    this.setState({
      instructions: event.target.value
    })
  }

  changeTitleValue = (event) => {
    this.setState({
      title: event.target.value
    })
  }

  changePrepValue = (event) => {
    this.setState({
      prep: event.target.value
    })
  }

  changePriceValue = (event) => {
    this.setState({
      price: event.target.value
    })
  }

  changeServesValue = (event) => {
    this.setState({
      serves: event.target.value
    })
  }

  changeTypeValue = (event) => {
    this.setState({
      type: event.target.value
    })
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
      } = this.state;

      return (
        <div className="Div-recipe-info">
          <div className="Close-button" onClick={closeModal}>✖</div>
          <div className="Div-photo-icons">
            <img className="Photo" src={photo}/>
            <Grid className="Grid-recipe-info">
              <IconAndLabel icon="timer" title="Prep:" label={this.state.prep}/>
              <IconAndLabel icon="attach_money" title="Price:" label={this.state.price}/>
              <IconAndLabel icon="room_service" title="Serves:" label={this.state.serves}/>
              <IconAndLabel icon="local_dining" label={this.state.type}/>
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
              <button className="Button" type="button" onClick={this.enableEditMode}>{editButtonLabel}</button>
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
    } = this.state;

    return (
      <div className="Div-recipe-info">
        <div className="Close-button" onClick={closeModal}>✖</div>
        <div className="Div-photo-icons">
          <img className="Photo" src={photo}/>
          <Grid className="Grid-recipe-info">
            <IconAndInput icon="timer" title="Prep:" value={prep} onChange={this.changePrepValue} />
            <IconAndInput icon="attach_money" title="Price:" value={price} onChange={this.changePriceValue}/>
            <IconAndInput icon="room_service" title="Serves:" value={serves} onChange={this.changeServesValue}/>
            <IconAndInput icon="local_dining" value={type} onChange={this.changeTypeValue}/>
          </Grid>
        </div>
        <div className="Div-title-text">
          <div className="Title">
            <input
              type="text"
              placeholder="Recipe Title"
              value={title}
              onChange={this.changeTitleValue}
            />
          </div>
          <div className="Div-list-intructions">
            <List>
              {this.buildIngredientRow()}
            </List>
            <div className="Instructions">
              <div className= "Instructions-title">Instructions</div>
              <textarea
                placeholder="Type how to prepare!"
                value={instructions}
                onChange={this.changeInstructionsValue}
              />
            </div>
          </div>
          <div className="Buttons">
            <button className="Button" type="button" onClick={this.disableEditMode}>Save</button>
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

    const {
      isEditing
    } = this.state;

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
