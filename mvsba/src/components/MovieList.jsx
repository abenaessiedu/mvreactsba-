import React from "react";
import MovieCard from "./MovieCard";

export default function MovieList() {
    return (
    
        <section className="movie_list">
            {/* HEADER */}
            <header className="align_center  movie_list_header">
                <h2 className="align_center movie_list_heading"> POP ULAR 🔥 </h2>
                
                {/* FILTERING  */}
                <div className="align_center movie_list_fs">
                    {/* STAR SYSTEM  */}
                    <ul className="align_center movie_filter">
                        <li className="movie_filter_item"> 8+ Star </li>
                        <li className="movie_filter_item"> 7+ Star </li>
                        <li className="movie_filter_item"> 6+ Star </li>
                    </ul>
                    {/* SORTING   */}
                    <select name="" id="" className="movie_sorting">
                        <option value=""> SortBy </option>
                        <option value=""> Date </option>
                        <option value=""> Rating </option>
                    </select>
                    {/* ASC/DEC ORDER  */}
                    <select name="" id="" className="movie_sorting">
                        <option value=""> Ascending </option>
                        <option value=""> Descending  </option>
                    </select>
                </div>
            </header>
            {/* MOVIE CARD  */}
            <div className="movie_cards">
                <MovieCard /> 
            </div>

            <div className="movie_details">
                <h3 className="movie_details_heading"> Movie Name </h3>
            <div className="movie_date_rate">
                           {/* RELEASE DATE  */}

                <p> 02-16-2018 </p>
                            {/* RATING  */}

                <p> 8.0 ⭐️ </p>
            </div>
            <p className="movie_description"> 
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta nisi eveniet itaque non rem quo.
            </p>
            </div>

        </section>
    )
}