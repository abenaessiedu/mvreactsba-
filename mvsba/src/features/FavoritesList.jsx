import { useSelector } from "react-redux"; 
import MovieCard from "../components/MovieCard";

const FavoritesList = () => {
    //trying to get the list of fav movies from Redux state 
    const favorites = useSelector((state) => state.favorites.favorites); 

    return(
        <div className="favorites-list">
            <h2> ❤️ YOUR FAVORITE MOVIES 🎬 </h2> 
            {favorites.length === 0 ? (
                <p> No Favorites Yet! </p>
            ) : (
                favorites.map((movie) => (
                    <MovieCard key={movie.imdbID} movie={movie} />
                ))
            )}

        </div>
    ); 
}; 

export default FavoritesList; 