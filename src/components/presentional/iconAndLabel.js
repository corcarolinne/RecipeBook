import React, { Component } from 'react';

class IconAndLabel extends Component {
  render() {
    const { icon, title, label } = this.props;
    return (
      <div className="iconAndLabel-Input">
        <i className="material-icons">{icon}</i>
        <div>{title} {label}</div>
      </div>
    );
  }
}

export default IconAndLabel;
