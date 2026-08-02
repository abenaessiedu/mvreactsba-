import { useSelector } from "react-redux"; 
import MovieCard from "../components/MovieCard";

export default function MovieList () {
    const { movies, loading, error } = useSelector((state) => state.movies); 

    if (loading) return <div> LOADING... </div>; 
    if (error) return <div> ERROR: {error} </div>; 

    return (
        <div className="movie-list"> 
        {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movie={movie} /> 

        ))}

        </div>
    ); 
}; 