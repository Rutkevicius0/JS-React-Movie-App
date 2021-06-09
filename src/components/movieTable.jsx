import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';

class MovieTable extends Component {
  state = {
    movies: getMovies(),
  };
  render() {
    return (
      <div>
        <h3>Movie suggestions</h3>
        <p> xx movies in our rental store</p>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rating</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((m) => (
              <tr key={m._id}>
                <td>{m.title}</td>
                <td>{m.genre.name}</td>
                <td>{m.numberInStock}</td>
                <td>{m.dailyRentalRate}</td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  //   createTable() {
  //     let table = document.getElementsByTagName('table');
  //     let tableBody = document.getElementsByTagName('tbody');
  //     this.state.movies.map((rowData) => {
  //       let row = document.createElement('tr');
  //       rowData.map((cellData) => {
  //         console.log(cellData);
  //         let cell = document.createElement('td');
  //         cell.appendChild(document.createTextNode(cellData));
  //         row.appendChild(cell);
  //       });
  //       tableBody.appendChild(row);
  //     });
  //   }
}

export default MovieTable;
