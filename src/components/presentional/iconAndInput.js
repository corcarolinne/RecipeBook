import React, { Component } from 'react';



class IconAndInput extends Component {
  render() {
    const { icon, title, input } = this.props;
    return (
      <div className="iconAndInput">
        <i className="material-icons">{icon}</i>
        <div>{title} {input}</div>
      </div>
    );
  }
}

export default IconAndInput;
