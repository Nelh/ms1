import React from 'react'

interface results {
    title: string | undefined;
    backdrop_path: string | undefined;
}

interface Props {
    results: results
}

const CardComponent: React.FC<Props> = ({ results }) => {
    return (
        <div id="card-box">
            <div className="card">
                <img src={results.backdrop_path} className="card-img-custom img-fluid" alt={results.title} />
                <div className="info">
                    <h4>{results.title}</h4>
                </div>
            </div>
        </div>
    )
} 

export default CardComponent;
