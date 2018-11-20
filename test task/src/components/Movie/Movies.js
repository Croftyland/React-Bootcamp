import React, { Component } from 'react';
import MovieList from './List';
import WishListItem from './WishList'

import MoviesData from '../../services/MoviesData';

import Pagination from './Pagination'
import { paginate } from "../../utils/paginate";



export default class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            currentPage: 1,
            pageSize: 4,
        };
    }

    componentDidMount() {
        this.setState(() => ({movies: MoviesData.getMovies()}));
    }






    handlePageChange = page => {
        console.log(page);
        this.setState({currentPage: page});
    };

    getPagedData = () => {
        const {
            pageSize,
            currentPage,
            movies: allMovies
        } = this.state;
        let filtered = allMovies;

        const movies = paginate(currentPage, pageSize);

        return { totalCount: filtered.length, data: movies }


    };

    render() {
        const { pageSize, currentPage } = this.state;
        const {totalCount, data: movies} = this.getPagedData();

        return (
            <div className="container-fluid" style={{marginLeft: '-15px'}}>
                <div className="d-flex flex-row">
                    <div className="col-sm-8">
                        <MovieList movies={this.state.movies}/>
                    </div>
                    <div className="col-sm-4">
                        <h2>Wish to watch:{this.props.count}</h2>
                    </div>
                </div>

                <Pagination
                    itemsCount={totalCount}
                    pageSize={pageSize}
                    currentPage={currentPage}
                    onPageChange={this.handlePageChange}
                />
            </div>
        );
    }
}