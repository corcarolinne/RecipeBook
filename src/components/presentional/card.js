import React, { Component } from 'react';


class Card extends Component {
  render() {

    const { title, photo } = this.props;

    return (
      <div className="Div-card">
        {title}
        <img src={photo} height="200" width="250"/>
      </div>
    );
  }
}

export default Card;
