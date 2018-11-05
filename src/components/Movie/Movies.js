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

    toggleSelected = (id, key) => {
        let temp = JSON.parse(JSON.stringify(this.state[key]))
        temp[id].selected = !temp[id].selected
        this.setState({
            [key]: temp
        })
    }

    resetThenSet = (id, key) => {
        let temp = JSON.parse(JSON.stringify(this.state[key]))
        temp.forEach(item => item.selected = false);
        temp[id].selected = true;
        this.setState({
            [key]: temp
        })
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
                        <WishListItem
                            titleHelper="movie"
                            title="Will watch:"
                            list={this.state.movies}
                            toggleItem={this.toggleSelected}
                        />
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