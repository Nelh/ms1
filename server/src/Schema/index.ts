import { GraphQLObjectType, GraphQLSchema } from "graphql"
import { GET_POPULAR_MOVIES } from "./Queries/PopularMovieQuery"
import { GET_POPULAR_SHOW } from "./Queries/PopularShowQuery"

const RootQuery = new GraphQLObjectType({
    name: 'RouteQuery',
    fields: {
        get_popular_movie: GET_POPULAR_MOVIES,
        get_popular_show: GET_POPULAR_SHOW
    }
})

export const schema = new GraphQLSchema({
    query: RootQuery
})