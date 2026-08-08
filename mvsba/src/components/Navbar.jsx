import React from "react"; 
import "./Navbar.css"; 

export default function Navbar() {
    return (
        <nav className='navbar'> 
        <h1> THE STORYTELLER </h1>
        <div className="navbar_links">  
            <a href=""> POPULAR 🔥 </a>
            <a href=""> FAN FAVES ⭐️ </a>
            <a href=""> UPCOMING 🚀 </a>

        </div>
        </nav>
    )
}