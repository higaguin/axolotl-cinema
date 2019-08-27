import gql from 'graphql-tag';

export default gql`
    query function($id: ID!, $idiom_id: ID) {
        function(id: $id) {
          id
          movie {
            id
            title{
              id
              original_name
              translated(idiom_id: $idiom_id) {
                id
                title_name
              }
            }
            poster_image
          }
          hall {
            id
          }
          idiom {
            id
          }
          function_date
          function_only_date
          function_only_time
        }
    }
`;