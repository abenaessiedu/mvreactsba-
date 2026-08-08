import React from "react";
import './App.css'
import Navbar from "./components/Navbar"
import MovieList from "./components/MovieList";


export default function App() {
  return (
    <div className="app">
      <Navbar /> 
    <MovieList /> 

    
    </div>
  )
}