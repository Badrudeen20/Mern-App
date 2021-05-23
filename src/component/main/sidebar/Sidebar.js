import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Link} from 'react-router-dom'

import './Sidebar.css'

export default function Sidebar() {
const [search,setSearch]  = useState("")
const [recent,setRecent] = useState([])
const [loading,setLoading] = useState(false)
const handleInput = (e) =>{
    setSearch(e.target.value)
}

const onSubmit = async (e)=>{
     e.preventDefault()
     if(search === "") return    
     document.getElementById('search').click();
}

useEffect(async ()=>{
    setLoading(true)
    const res = await fetch('/recent', {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json"
        },
        credentials: "include"
      })
      const data = await res.json()
      setRecent(data)
      setLoading(false)
},[])

if (loading) {
    return <h2>Loading...</h2>
  }

    return (
        <div className="side">
           <div className="search">
               <form onSubmit={onSubmit}>
                  <input type="text" name="search"
                 
                   value={search}
                   onChange={handleInput}
                   />
                  <button type="submit" onClick={onSubmit}>Search</button>
                           <Link to={{pathname:`/search/${search}`}} id="search" className="hide">searc</Link>
               </form>
           </div>
           <div className="recent">
               <h3 className="rec_text">Recent Post</h3>
               <ul className="recent_post">
                  {recent.map((data,index)=>(
                       <li>
                      
                       <Link to={`/download/${data._id}`}>
                           <img src={data.image}></img>
                       </Link>
                       <Link to={`/download/${data._id}`}>
                        {data.name}
                       </Link>
                   
               </li>
               
                  ))}
                  
               </ul>
           </div>
        </div>
    )
}
