import React, { Component } from 'react';


class Card extends Component {
  render() {

    const { title, photo, cardClick } = this.props;

    return (
      <div className="Div-card" onClick={cardClick}>

        <img className="Div-img-container" src={photo} height="200" width="200"/>
          <i>{title}</i>


      </div>
    );
  }
}

export default Card;
