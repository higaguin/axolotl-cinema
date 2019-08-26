import React from 'react';
import { graphql } from 'react-apollo';
import query from '../../queries/fetchFunction';
import MovieInfo from '../movies/MovieInfo';
import TicketProcess from '../tickets/TicketProcess';
import { connect } from 'react-redux';

class FunctionView extends React.Component {
    
    render() {
        if(this.props.data.loading) { return <div>Loading...</div> }
        const { function: _function } = this.props.data;

        return (<div className="ui container grid">
            <div className="row">
                <div className="ten wide column">
                    <MovieInfo id={_function.movie.id} />
                </div>
                <div className="six wide column">
                </div>
            </div>
            <div className="row">
                <div className="sixteen wide column">
                    <TicketProcess />
                </div>
            </div>
        </div>);
    }
}

const mapStateToProps = state => {
    return { idiom_id: state.search.idiom_id }
}

export default connect(mapStateToProps)(graphql(query, { options: props => { return { variables: { id: props.match.params.id, idiom_id: props.idiom_id } } } })(FunctionView));