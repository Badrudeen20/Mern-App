import React from 'react'
import {NavLink, Link} from 'react-router-dom'
import './Footer.css'

export default function Footer() {
    return (
        <>
          <div className="footer">
             <div className="foot_link">
                 <span><Link to={'/'}>Home</Link></span>
                 <span>|</span>
                 <span><Link  to={'/About'}>About Us</Link></span>
                 <span>|</span>
                 <span><Link  to={'/contact'}>Contact Us</Link></span>
             </div>
          </div>
        </>
    )
}
