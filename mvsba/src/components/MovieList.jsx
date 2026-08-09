import React, { useEffect } from "react";
import MovieCard from "./MovieCard";

export default function MovieList() {

useEffect(() => {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4f2a4b78035923567997eade8e69b198")
}, []) 


    return (
    
        <section className="movie_list">
            {/* HEADER */}
            <header className="align_center  movie_list_header">
                <h2 className="align_center movie_list_heading"> POPULAR 🔥 </h2>
                
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

        

        </section>
    )
}