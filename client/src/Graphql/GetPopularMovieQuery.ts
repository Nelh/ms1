import { gql } from '@apollo/client'

export const GET_POPULAR_MOVIE = gql`
  query get_popular_movie {
      get_popular_movie {
        page
        results {
          adults
            backdrop_path
            id
            original_title
            overview
            popularity
            release_date
            title
            video
            vote_average
            vote_count
        }
      }
    }
  
`;