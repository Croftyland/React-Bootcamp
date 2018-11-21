import React from "react";
import SortBy from './SortBy';
import PrimaryReleaseYear from './PrimaryReleaseYear';
import Pagination from './Pagination';


export default class Filters extends React.Component {
    render() {
        const {
            filters: {sort_by},
            page,
            onChangeFilters,
            onChangePagination
        } = this.props;
        return (
            <form className="mb-3">
                <SortBy sort_by={sort_by}
                        onChangeFilters={onChangeFilters}
                />
                <PrimaryReleaseYear
                primary_release_year={primary_release_year}
                onChangeFilters={onChangeFilters}/>
                <Pagination
                page ={page}
                total_pages={total_pages}
                onChangePagination={onChangePagination}
                />
            </form>
        );
    }
}
