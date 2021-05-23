import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Header.css'
export default function Header() {
    return (
        <>
               <div className="header">
                <div className="top">
                  
                </div>
                <div className="logo">
                 <Router>
                  <Link to="/home" className="bollyhub">FilmyWood</Link>
                 </Router>
                </div>
            </div>
        </>
    )
}
