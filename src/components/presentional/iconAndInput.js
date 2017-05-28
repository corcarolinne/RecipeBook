import React, { Component } from 'react';

class IconAndInput extends Component {
  render() {
    const { icon, title, value, onChange} = this.props;
    return (
      <div className="iconAndLabel-Input">
        <i className="material-icons">{icon}</i>
        {title}
        <input type="text" className="input" value={value} onChange={onChange}/>
      </div>
    );
  }
}

export default IconAndInput;
