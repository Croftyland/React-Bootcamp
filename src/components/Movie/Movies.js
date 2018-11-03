import React, { Component } from 'react';
import MovieList from './List';
import MoviesData from '../../services/MoviesData';


export default class Movies extends Component {

    constructor() {
        super();

        this.state = {
            movies: []
        };
    }

    componentDidMount() {
        this.setState(() => ({ movies: MoviesData.getMovies() }));
    }

    render() {
        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">
                    <div className="col-sm-12">
                        <MovieList movies={this.state.movies} />
                    </div>
                </div>
            </div>
        );
    }
}