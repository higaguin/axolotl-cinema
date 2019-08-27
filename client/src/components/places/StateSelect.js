import React from 'react';
import { Dropdown } from 'semantic-ui-react'
import { graphql } from 'react-apollo';
import query from '../../queries/fetchCountriesWStates';

class StateSelect extends React.Component {
    state = {}
    handleChange = (e, { value, text }) => {
        this.props.changeState(value);
        this.setState({ currentValue: text });
    }

    render() {
        if(this.props.data.loading){ return <div>Loading...</div>; }

        const countries = this.props.data.countries_has_states.map(country => {

            return [ 
                <Dropdown.Header key={country.iso} content={country.country_name} />,
                <Dropdown.Divider key={country.country_name} />,
                country.states.map(state => {
                    return <Dropdown.Item key={state.iso} 
                                            value={state.iso} 
                                            text={state.state_name}
                                            onClick={this.handleChange} />
                })
            ];
        });

        const { currentValue, opened = false } = this.state;

        return (
        <Dropdown
            placeholder='Select State'
            className="selection"
            open={opened}
            onClick={() => { this.setState({ opened: !opened }) }}
            value={true}
            text={currentValue}>
                <Dropdown.Menu>
                    {countries}
                </Dropdown.Menu>
        </Dropdown>
        );
    }
}

export default graphql(query)(StateSelect);