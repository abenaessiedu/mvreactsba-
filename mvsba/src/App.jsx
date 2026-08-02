import React from "react";
import { Browser as Router, Routes, Route } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import MovieList from "./features/movieList";
import FavoritesList from "./features/FavoritesList";
import Navbar from "./components/NavBar";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <div>
            <SearchBar />
            <MovieList />
          </div>
        }

        />
        <Route path="/favorites" element={<FavoritesList />} />
      </Routes>
    </Router>
  )
}