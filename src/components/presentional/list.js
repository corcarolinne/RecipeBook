import React, { Component } from 'react';


class List extends Component {
  render() {
    const { children } = this.props;
    return (
      <div className="List">
        <div className="Ingredients-title">Ingredients</div>
        {children}
      </div>
    );
  }
}

export default List;
