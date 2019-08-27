import React from 'react';
import { graphql } from 'react-apollo';
import MovieFunctions from '../movies/MovieFunctions';
import query from '../../queries/fetchTheaterMovies';
import { connect } from 'react-redux';

class TheaterMovies extends React.Component {

    render() {
        if(this.props.data.loading){ return <div>Loading...</div> }

        const movies_theater = this.props.data.movies_of_theater.map(movie => {
            return <MovieFunctions key={movie.id} movie={movie} />;
        });

        return (
        <div className="ui four column doubling stackable grid container">
            <div className="four wide column"></div>
            <div className="eight wide column">
                { movies_theater }
            </div>
            <div className="four wide column"></div>
        </div>);
    }
}

const mapStateToProps = state => {
    return { idiom_id: state.search.idiom_id }
}

export default connect(mapStateToProps)(graphql(query, { options: props => { return { variables: { theater_id: props.match.params.id, search_date: '2019-10-25', idiom_id: props.idiom_id } } } })(TheaterMovies));