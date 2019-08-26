import gql from 'graphql-tag';

export default gql`
    {
        movies {
            id
            title {
              original_name
            }
            poster_image
        }
    }
`;