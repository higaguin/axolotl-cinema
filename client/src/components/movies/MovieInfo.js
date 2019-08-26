import React from 'react';
import { graphql } from 'react-apollo';
import query from '../../queries/fetchMovie';
import { connect } from 'react-redux';

class MovieInfo extends React.Component {
    render() {
        if(this.props.data.loading) { return <div>Loading ... </div> }
        
        const { title, poster_image, plot, clasification, genres, actors, directors } = this.props.data.movie;

        const getGenres = () => { return genres.map((genre, i) => {
            return <span key={i}>{genre.translated!='undefined'?genre.translated.genre_name:genre.original_genre + (i+1==genres.length?'':', ')}</span>;
        }); }

        const getActors = () => { return actors.map((actor, i) => {
            return <span key={i}>{actor.artistic_name + (i+1==actors.length?'':', ')}</span>
        }); }

        const getDirectors = () => { return directors.map((director, i) => {
            return <span key={i}>{director.director_name + (i+1==directors.length?'':', ')}</span>
        }); }

        return (
            <div className="ui card fluid">
                <div className="content">
                    <img className="ui image left floated tiny" src={poster_image} />
                    <div className="header">{title.translated!='undefined'?title.translated.title_name:title.original_name}</div>
                    <div className="content">
                        <b>Plot: </b> {plot.translated!='undefined'?plot.translated.plot_name:plot.original_plot}
                    </div>
                    <div className="content">
                        <b>Classification: </b> {clasification!='undefined'?clasification.letter:''}
                    </div>
                    <div className="content">
                        <b>Actors: </b>  { getActors() }
                    </div>
                    <div className="content">
                        <b>Directors: </b>  { getDirectors() }
                    </div>
                    <div className="content">
                        <b>Genres: </b>  { getGenres() }
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return { idiom_id: state.search.idiom_id }
}

export default connect(mapStateToProps)(graphql(query, { options: props => { return { variables: { id: props.id, idiom_id: props.idiom_id } } } })(MovieInfo));