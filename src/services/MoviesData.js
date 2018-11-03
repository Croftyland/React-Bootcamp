import movies from './movies.json';

export default class MoviesData {
    static getMovies() {
        return movies ? movies : [];
    }
}