import React, { Component } from 'react';


class Card extends Component {
  render() {

    const {
      title,
      photo,
      instructions,
      cardClick } = this.props;

    return (
      <div className="Card" onClick={cardClick}>

        <img className="Photo-card" src={photo}/>
        <div className="Title-card">{title}</div>


      </div>
    );
  }
}

export default Card;
