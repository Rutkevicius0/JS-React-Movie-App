import React, { Component } from 'react';
import { getMovies } from '../services/fakeMovieService';
import TableRow from './rowTable';

class MovieTable extends Component {
  state = {
    movies: getMovies(),
  };
  handleDelete = (idToDelete) => {
    console.log(idToDelete);
    const moviesFiltered = this.state.movies.filter(
      (m) => idToDelete !== m._id,
    );
    console.log(moviesFiltered);
    this.setState({ movies: moviesFiltered });
  };
  render() {
    const { movies: mv } = this.state;
    if (mv.length === 0)
      return (
        <div className="alert alert-warning">
          There are no movies at the moment
        </div>
      );
    return (
      <div>
        <h3>Movie suggestions</h3>
        <p> {mv.length} movies in our rental store</p>

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
            <TableRow movies={this.state.movies} onDelete={this.handleDelete} />
          </tbody>
        </table>
      </div>
    );
  }
  deleteMovie = (movieId) => {
    const moviesAfterDelete = this.state.movies.filter(
      (m) => m._id !== movieId,
    );
    this.setState({ movies: moviesAfterDelete });
  };
}

export default MovieTable;
