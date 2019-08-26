import React from 'react';
import TheaterSelect from './places/TheaterSelect';
import StateSelect from './places/StateSelect';
import IdiomSelect from './idioms/IdiomSelect';
import { withRouter } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { searchTheater } from '../actions';
import { connect } from 'react-redux';

class Header extends React.Component {
    state = {}
    
    render() {
        const { selected_state, selected_theater } = this.state;

        return (<div className="ui blue inverted large top attached menu">
            <div className="ui container">
                <img src={require('../resources/logo.png')} />
                <div className="item">
                    <div className="ui grid">
                        <div className="six wide column">
                            <StateSelect changeState={
                                (selected_state) => { 
                                    this.setState({ selected_state })
                                }
                            } />
                        </div>
                        <div className="six wide column">
                            <TheaterSelect selected_state={selected_state} changeTheater={(selected_theater) => { this.setState({ selected_theater }) }} />
                        </div>
                        <div className="one wide column">
                            <Button content='Search' primary onClick={(e) => { 
                                this.props.searchTheater({ state_iso: selected_state, theater_id: selected_theater });
                                this.props.history.push(`/theater-movies/${selected_theater}`) 
                            }} />
                        </div>
                    </div>
                </div>
                <div className="dropdown right item">
                    <IdiomSelect />
                </div>
            </div>
        </div>);
    }
};

const mapStateToProps = state => {
    // console.log(state);
    return state;
}

export default connect(mapStateToProps, { searchTheater })(withRouter(Header));