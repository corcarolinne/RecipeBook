import React, { Component } from 'react';


class Grid extends Component {
  render() {

    const { children, className } = this.props;

    return (
      <div className={`Grid ${className}`}>
        {children}
      </div>
    );
  }
}

export default Grid;
