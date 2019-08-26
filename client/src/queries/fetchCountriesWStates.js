import gql from 'graphql-tag';

export default gql`
    {
        countries_has_states{
            id
            country_name
            iso
            states{
                id
                state_name
                iso
            }
        }
    }
`;