import React from "react";


export default function MovieCard() {
    return (
        <a 
        href="" 
        className="movie_card">
            <img 
            src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/black-panther-web.jpg"
                
                alt="movie poster" 
                className="movie_poster" />
            <div className="movie_details">
                <h3 className="movie_details_heading"> Movie Name </h3>
                <div className="align_center movie_date_rate">
                    {/* RELEASE DATE  */}

                    <p> 02-16-2018 </p>
                    {/* RATING  */}

                    <p> 8.0 ⭐️ </p>
                </div>
                <p className="movie_description">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta nisi eveniet itaque non rem quo.
                </p>
            </div>



        </a>
    );
}; 