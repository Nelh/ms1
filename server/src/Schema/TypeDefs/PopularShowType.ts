import { GraphQLBoolean, GraphQLFloat, GraphQLID, GraphQLInt, GraphQLList, GraphQLObjectType, GraphQLString } from 'graphql'

const results = new GraphQLObjectType({
    name: 'result_show',
    fields: () => ({
        backdrop_path: { type: GraphQLString },
        first_air_date: { type: GraphQLString },
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        original_language: { type: GraphQLString },
        original_name: { type: GraphQLString },
        overview: { type: GraphQLString },
        poster_path: { type: GraphQLString },
        popularity: { type:GraphQLFloat },
        vote_average: { type:GraphQLFloat },
        vote_count: { type: GraphQLInt },
    })
})

export const PopularShowType = new GraphQLObjectType({
    name: 'Popular_show',
    fields: {
        page: { type: GraphQLInt },
        results: { type: new GraphQLList(results)}
    }
})