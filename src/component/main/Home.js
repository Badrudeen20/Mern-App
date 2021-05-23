import React, { useEffect, useState } from 'react'
import Pagination from './pagination/Pagination'
import Lists from './movies/Movies'
import Sidebar from './sidebar/Sidebar'
import {useLocation} from 'react-router-dom'
import Loading from '../loading/Loading'
import './Main.css'


export default function Main() {
   
    const [length,setLength] = useState()
    const [loading, setLoading] = useState(false)
    const [limit] = useState(15)
    const location = useLocation()
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    useEffect(async ()=>{     
                  setLoading(true)
                  const res = await fetch('/home',{
                    method:"GET",
                    headers:{
                       Accept: "application/json",
                      "Content-Type": "application/json"  
                    },
                    credentials:"include",
                })
                const data  = await res.json()
                  setLength(data.limit)
                  setLoading(false)  
    },[]) 

    if (loading) {
        return <Loading />
      }
  
    const howManyPages = Math.ceil(length/limit)
  
    return (
        <>
        {length > 0 ?
            <div className="main">
                <div className="wrapper">
                    <div className="content">
                       <div className="post">
                           <h3>{splitLocation[1]==="" && "Home"}</h3>
                       </div>
                 
                       <div className="archive">
                           <Lists />
                       </div>  
                       

                           <div className="pagination_container">
                               <Pagination
                               page={howManyPages}
                              />
                            </div> 

                    </div>
                   <div className="sidebar">
                       <Sidebar  />
                   </div>
                </div>
            </div> : "Data Not Found!"}
        </>
    )
}
