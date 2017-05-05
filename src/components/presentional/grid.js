import React, { Component } from 'react';


class Grid extends Component {
  render() {

    const { children } = this.props;

    return (
      <div className="Grid">
        {children}
      </div>
    );
  }
}

export default Grid;
