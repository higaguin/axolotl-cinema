import React from 'react';
import query from '../../queries/fetchTheatersOfState';
import { Dropdown } from 'semantic-ui-react';
import { graphql } from 'react-apollo';

class Theater extends React.Component {
    
    render() {
        let theaters = [];

        if(!this.props.data.loading) {
            theaters = this.props.data.theaters_of_state.map(theater => {
                return { key: theater.id, value: theater.id, text: theater.theater_name }
            });
        }

        return (
            <Dropdown
                placeholder='Select Theater'
                selection 
                onChange={(e, { value }) => this.props.changeTheater(value)}
                options={theaters} />
        );
    }
}

export default graphql(query, { options: props => { console.log(props); return { variables: { iso: props.selected_state } } } })(Theater);