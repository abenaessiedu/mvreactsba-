const API_KEY = "161a2ef1"
const BASE_URL = "http://www.omdbapi.com/?apikey=" + API_KEY;

//I want to try and fetch movies by their titles and search terms 
export const searchMovies = async (searchTerm) => {

    //I want to make a GET request to the api 
    const response = await fetch(`${BASE_URL}&s=${searchTerm}`); 

    const data = await response.json(); 
    //i want this to return an empty array if like the movie isn't there 
    return data.Search ||[]; 
}; 

//i want to be able to get the movie's information by ID 
export const getMovieDetails = asyc (movieId); {
    const response = await fetch(`${BASE_URL}&i=${movieId}`); 
    const data = await response.json(); 
    return data; 
}; 