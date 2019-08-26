import React from 'react';
import query from '../../queries/fetchSystemIdioms';
import { changeIdiom } from '../../actions';
import { Dropdown } from 'semantic-ui-react';
import { graphql } from 'react-apollo';
import { connect } from 'react-redux';

class IdiomSelect extends React.Component {
    render() {
        let idioms = [];

        if(!this.props.data.loading) { 
            idioms = this.props.data.idioms_in_system.map(idiom => {
                return { key: idiom.id, value: idiom.id, text: idiom.idiom_name }
            }); 
        }

        return (
            <Dropdown
                placeholder='Select Idiom'
                inline
                value={this.props.idiom_id}
                onChange={(e, { value }) => {
                    this.props.changeIdiom(value);
                }}
                options={idioms} />
        );
    }
}

const mapStateToProps = state => {
    return { idiom_id: state.search.idiom_id };
}

export default connect(mapStateToProps, { changeIdiom })(graphql(query)(IdiomSelect));