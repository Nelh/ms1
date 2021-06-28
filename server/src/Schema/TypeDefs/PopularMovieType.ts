import { GraphQLBoolean, GraphQLFloat, GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'

const results = new GraphQLObjectType({
    name: 'result_movie',
    fields: () => ({
        adults: { type: GraphQLBoolean },
        backdrop_path: { type: GraphQLString },
        id: { type: GraphQLID },
        original_title: { type: GraphQLString },
        overview: { type: GraphQLString },
        popularity: { type:GraphQLFloat },
        poster_path: { type: GraphQLString },
        release_date: { type: GraphQLString },
        title: { type: GraphQLString },
        video: { type: GraphQLBoolean },
        vote_average: { type:GraphQLFloat },
        vote_count: { type: GraphQLInt },
    })
})

export const PopularMovieType = new GraphQLObjectType({
    name: 'Popular_movie',
    fields: {
        page: { type: GraphQLInt },
        results: { type: new GraphQLList(results)}
    }
})