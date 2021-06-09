import React, { Component } from 'react';

class MovieFooter extends Component {
  render() {
    return (
      <div className="container mt-5 ">
        <h5>{this.handleDate()}</h5>
        <p>All rights reserved</p>
      </div>
    );
  }
  handleDate() {
    return new Date().toLocaleDateString();
  }
}

export default MovieFooter;
