import { useDispatch, useSelector } from "react-redux"; 
import { addFavorite, removeFavorite } from "../features/favoritesSlice"; 

export default function MovieCard({ movie }) {
    //dispatch function from Redux
    const dispatch = useDispatch(); 
    //list of fav movies from redux state i think
    const favorites = useSelector((state) => state.favorites.favorites); 
    //trying to see if the chosen movie is already a fav
    const isFavorite = favorites.some((fav) => fav.imdbID === movie.imdbID); 


    //the favorite button click 
    const handleFavoriteClick = () => {
        if (isFavorite) {
            //removing fav
            dispatch(removeFavorite(movie.imdbID)); 
        } else {
            //trying to add a fav, if its not already like there 
            dispatch(addFavorite(movie)); 
        }
    }; 
    return (
        <div className="movie-card">
            <img src={movie.Poster} alt={movie.Title} /> 
            <h3> 🍿 {movie.Title} 🍿 </h3> 
            <p> Year: {movie.Year} </p>
            <button onClick={handleFavoriteClick}>
                {isFavorite ? "Remove From Favorites" : "Add to Favorites"}
            </button>
        </div>
    )
}
 