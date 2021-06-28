import { gql } from '@apollo/client'

export const GET_POPULAR_SHOW = gql`
    query get_popular_show {
        get_popular_show {
            page
            results {
              backdrop_path
              first_air_date
              id
              name
              original_language
              original_name
              overview
              poster_path
              popularity
              vote_average
              vote_count
            }
        }
    }
`;