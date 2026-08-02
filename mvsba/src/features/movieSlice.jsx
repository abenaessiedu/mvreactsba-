import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import { searchMovies, getMovieDetails } from "./movieService"; 


//i looked up this thing called async thunk with the redux toolkit 
//using it to search for movies 

export const fetchMovies = createAsyncThunk( 
    "movie/search", 
    async (searchTerm) => {
        //trying to get the api to get the movies 
        return await searchMovies(searchTerm); 
    }
); 

//now i want to be able to get the movie's details 
export const fetchMovieDetails = createAsyncThunk(
    "movie/details", 
    async(movieID) => {
        return await getMovieDetails(movieId);  
    }
); 

const movieSlice = createSlice({
    name: "movies", 
    initialState: {
        movies: [],
        selectedMovie: null, 
        loading: false, 
        error: null, 
    }, 
    reducers: {
        clearMovies: (state) => {
            state.movies = []; 
            state.selectedMovie = null;
        }, 
    }, 
    extraReducers: (builder) => {
        builder
        .addCase(fetchMovies.pending, (state) => {
            state.loading = true; 
        })
        .addCase(fetchMovies.fulfilled, (state, action) => {
            state.loading = false; 
            state.movies = action.payload; 
        })
        .addCase(fetchMovies.rejected, (state, action) => {
            state.loading = false; 
            state.error = action.error.message; 
        })
        .addCase(fetchMovieDetails.pending, (state) => {
            state.loading = true; 
        })
        .addCase(fetchMovieDetails.fulfilled, (state, action) => {
            state.loading = false; 
            state.selectedMovie = action.payload; 
        })
        .addCase(fetchMovieDetails.rejected, (state, action) => {
            state.loading = false; 
            state.error = action.error.message; 
        })
    }

})
export const { clearMovies } = moviesSlice.actions; 

export default movieSlice.reducer; 