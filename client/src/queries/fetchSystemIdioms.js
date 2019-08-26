import gql from 'graphql-tag';

export default gql`
    {
        idioms_in_system{
            id
            idiom_name
        }
    }
`;