import { useState } from "react"; 
import { useDispatch } from "react-redux"; 
import { fetchMovies } from "../features/movieSlice"

export default function SearchBar(){
    //trying to store the search term 
    const [searchTerm, setSearchTerm] = useState(""); 
    //trying to get the dispatch function from Redux
    const dispatch = useDispatch(); 


    //this is for form info 
    const handleSubmit = (e) => {
        e.preventDefault(); 
        if(searchTerm.trim()) {
            dispatch(fetchMovies(searchTerm));
        }
    }; 

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            value={searchTerm} 
            onChange={(e) => setSearchTerm(e.target.value)} 
            placeholder= "Search for movies..."
            />
            <button type="submit"> SEARCH </button>
        </form>
    ); 
}; 
