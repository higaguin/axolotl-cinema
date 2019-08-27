import gql from 'graphql-tag';

export default gql`
    query getStateByCountry($iso: String!){
        states_of_country(iso: $iso){
            id
            state_name
            iso
        }
    }
`;