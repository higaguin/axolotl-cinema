import gql from 'graphql-tag';

export default gql`
    query getMovie($id: ID!, $idiom_id: ID){
        movie(id: $id){
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
            plot {
                id
                original_plot
                translated(idiom_id: $idiom_id) {
                    id
                    plot_name
                }
            }
            clasification{
                id
                letter
            }
            actors{
                id
                artistic_name
            }
            directors{
                id
                director_name
            }
            genres{
                id
                original_genre
                translated(idiom_id: $idiom_id) {
                    id
                    genre_name
                }
            }
        }
    }
`;