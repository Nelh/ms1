import React from 'react'
import { useQuery } from '@apollo/client'

import CardComponent from '../Components/CardComponent'

import { GET_POPULAR_MOVIE } from '../Graphql/GetPopularMovieQuery'
import { GET_POPULAR_SHOW } from '../Graphql/GetPopularShowQuery'

interface result {
    id: number
    title: string | undefined;
    backdrop_path: string | undefined;
}

export default function HomePage() {

    let { data } = useQuery(GET_POPULAR_MOVIE);

    if(data) {
        console.log(data);
        data = data.get_popular_movie;
    }

    return (
        <div>
            <div className="content-box">
                <div className="container">
                    {data && data.results.map((result: result) => {
                        return (
                            <CardComponent results={result} key={result.id} />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
