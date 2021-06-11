import React, { Component } from 'react';

class TableRow extends Component {
  state = {};
  render() {
    return this.props.movies.map((m) => (
      <tr key={m._id}>
        <td>{m.title}</td>
        <td>{m.genre.name}</td>
        <td>{m.numberInStock}</td>
        <td>{m.dailyRentalRate}</td>
        <td>
          <button
            onClick={() => this.props.onDelete(m._id)}
            className="btn btn-danger"
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  }
}

export default TableRow;
