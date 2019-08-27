import React from 'react';
import MoviePoster from './MoviePoster';
import { graphql } from 'react-apollo';
import query from '../../queries/fetchMovies';

class MovieList extends React.Component {

    renderMovies() {
        return this.props.data.movies.map(movie => {
            return (
                <MoviePoster key={movie.id} movie={movie} />
            );
        });
    }

    render() {
        if(this.props.data.loading) { return <div>Loading ....</div> }
        
        return (
            <div>
                {this.renderMovies()}
            </div>
        );
    }
}

export default graphql(query)(MovieList);