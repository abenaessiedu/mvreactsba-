import { createSlice } from "@reduxjs/toolkit"; 
export const { addFavorite, removeFavorite } = favoritesSlice.actions; 
export default favoritesSlice.reducer;  

//a helper function to try and load favs from localStorageee
 export default function loadFavorites() {
    const favorites = localStorage.getItem("favorites"); 
    return favorites ? JSON.parse(favorites) : []; 
}; 

//trying to save favorites to localStorage 
const saveFavorites = (favorites) => {
    localStorage.setItem('favorites', JSON.stringify(favorites)); 

}; 

const favoritesSlice = createSlice({
    name: "favorites", 
    initialState: {
        favorites: loadFavorites(), 
    }, 
    //trying to remove movies from favs 
    removeFavorite: (state, action) => {
        state.favorites = state.favorites.filter(
            (movie) => movie.imdbID !== action.payload 

        ); 
        saveFavorites(state.favorites); 
    },
}); 

