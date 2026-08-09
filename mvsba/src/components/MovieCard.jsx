import React from "react";


export default function MovieCard({movie}) {
    return (
        <a 
        href={`http://www.themoviedb.org/movie/${movie.id}`} target="_blank" className="movie_card">
            <img 
            src= {`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                
                alt="movie poster" 
                className="movie_poster" />
            <div className="movie_details">
                <h3 className="movie_details_heading"> {movie.original_title} </h3>
                <div className="align_center movie_date_rate">
                    {/* RELEASE DATE  */}
                    <p> {movie.release_date} </p>
                    {/* RATING  */}

                    <p> {movie.rate_average} </p>
                </div>
                <p className="movie_description">
                    {movie.overview.slice(0, 100) + "..."}
                </p>
            </div>



        </a>
    );
}; 