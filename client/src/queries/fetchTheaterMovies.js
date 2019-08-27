import gql from 'graphql-tag';

export default gql`
    query getTheaterMovies($theater_id: ID!, $search_date: Date!, $idiom_id: ID) {
        movies_of_theater(theater_id: $theater_id, search_date: $search_date) {
            id
            poster_image
            title {
                id
                original_name
                translated(idiom_id: $idiom_id) {
                    id
                    title_name
                }
            }
            functions{
                id
                function_date
                function_only_time
            }
        }
    }
`;