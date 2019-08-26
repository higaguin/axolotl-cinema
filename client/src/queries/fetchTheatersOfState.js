import gql from 'graphql-tag';

export default gql`
    query getTheatersByState($iso: String! = "") {
        theaters_of_state(iso: $iso){
            id
            theater_name
            direction
        }
    }
`;