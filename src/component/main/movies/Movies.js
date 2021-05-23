import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './Movies.css'

export default function Movies() {
    const side  =   useSelector(state => state.store)
    const [movie, setMovie]  = useState([])
    const [loading, setLoading] = useState(false)
    const [limit] = useState(15)

    useEffect(async ()=>{     
        setLoading(true)
        const res = await fetch(`/home?page=${side}&limit=${limit}`,{
            method:"GET",
            headers:{
               Accept: "application/json",
              "Content-Type": "application/json"  
            },
            credentials:"include",
        })
        const data  = await res.json()
        setMovie(data.data)
        setLoading(false)  
},[side]) 

if (loading) {
    return <h2>...</h2>
  }

    return (
        <>
             <ul>
                 {movie.map((post,index)=>(
                 
                  <li key={index}>
                      <div className="cover">
                       <Link to={{pathname:`/download/${post._id}`}}>
                          <img src={post.image}
                            alt={post.name} />
                        </Link> 
                        <div className="text_box">
                        <Link className="text" to={{pathname:`/download/${post._id}`}}>
                         {post.name}
                        </Link> 
                        </div>
                       
               
                      </div>      
                  </li> 

                 ))}
                    
                                        
           </ul>
        </>
    )
}
