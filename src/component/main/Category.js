import React, { useEffect, useState } from 'react'
import Pagination from './pagination/Pagination'
import Movie from './category/Movie'
import Sidebar from './sidebar/Sidebar'
import {useLocation} from 'react-router-dom'
import Loading from '../loading/Loading'
import './Main.css'


export default function Main(props) {

    const [length,setLength] = useState()
    const [loading, setLoading] = useState(false)
    const [limit,setLimit] = useState(15)
    const location = useLocation()
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    useEffect(async ()=>{ 
        try{
              setLoading(true)
              const res = await fetch(`/category/${props.match.params.category}`,{
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                credentials: "include"
              })
              const data = await res.json()
              setLength(data.limit)
              setLoading(false)
     }catch(err){
       console.log(err)
  }

    },[props.match.params.category])

  

      
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
                           <h3>{splitLocation[2]}</h3>
                       </div>

                       <div className="archive">
                           <Movie  name={props.match.params.category}/>
                       </div>
                           <div className="pagination_container">
                             <Pagination
                               page={howManyPages}
                              />
                           </div>
                    </div>
                    <div className="sidebar">
                          <Sidebar />
                    </div>
                </div>
            </div> : "Data Not Found!" }
        </>
    )
}
