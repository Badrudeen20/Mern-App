import React, { useEffect, useState } from 'react'
import {NavLink, Link} from 'react-router-dom'
import { useLocation } from "react-router-dom";

export default function Router() {
    const [notify,setNotify] = useState(false)
    const [loading,setLoading] = useState(false)
    const location = useLocation();
    const { pathname } = location;
    const [no,setNo] = useState(0)
    const splitLocation = pathname.split("/");
    const [genre,setGenre] = useState("Genre")
   
    useEffect(()=>{
      setLoading(true)
      const Notify = async ()=>{
        const res = await fetch('/notify',{
          method:"GET",
          headers:{
             Accept: "application/json",
            "Content-Type": "application/json"  
          },
          credentials:"include",
      })
      const data  = await res.json()
         if(data.auth){
            setNotify(true)
            setNo(data.user.length)
         }
      }
      Notify()

     setLoading(false)
      
    },[splitLocation])

    if (loading) {
      return <h2>...</h2>
    }
 
    return (
         <>
         <div className="menu">
              <ul className="menu_link">
                  <li className="nav-link" onClick={()=>setGenre("Genre")} >        
                     <Link to={'/'}  className={splitLocation[1] === "" ? "menu_li active" : "menu_li"}>
                         Home
                    </Link>     
                 </li>
                
                    
                 <li  className="nav-link" onClick={()=>setGenre("Genre")}>
                      <Link to={'/category/bollywood'} className={splitLocation[2] === "bollywood" ? "menu_li active" : "menu_li"}>
                          Bollywood
                      </Link>
                  </li>

                  <li className="nav-link" onClick={()=>setGenre("Genre")}>
                      <Link to={'/category/hollywood'} className={splitLocation[2] === "hollywood" ? "menu_li active" : "menu_li"}>
                         Hollywood
                      </Link>           
                  </li>

                  <li className="nav-link" onClick={()=>setGenre("Genre")}>
                      <Link to={'/category/dualaudio'} className={splitLocation[2] === "dualaudio" ? "menu_li active" : "menu_li"}>
                       Dual Audio
                      </Link>
                  </li>
                 
                  <li className="nav-link" onClick={()=>setGenre("Genre")}>
                      <Link to={'/category/pakistani'} className={splitLocation[2] === "pakistani" ? "menu_li active" : "menu_li"}>
                        Pakistani
                      </Link>
                  </li>

                 
                  <li className="nav-link" onClick={()=>setGenre("Genre")}>
                      <Link to={'/category/animation'} className={splitLocation[2] === "animation" ? "menu_li active" : "menu_li"}>
                        Animation
                      </Link>
                  </li>

                 <li className="nav-link" onClick={()=>setGenre("Genre")}>
                      <Link to={'/category/punjabi'} className={splitLocation[2] === "punjabi" ? "menu_li active" : "menu_li"}>
                        Punjabi
                      </Link>
                 </li>

                 <li className="nav-link" onClick={()=>setGenre("Genre")}>
                      <Link to={'/category/movie300'} className={splitLocation[2] === "movie300" ? "menu_li active" : "menu_li"}>
                       300MB Movie
                      </Link>
                 </li>

                

                 <li className="nav-link" onClick={()=>setGenre("Genre")}>
                      <Link to={'/category/south'} className={splitLocation[2] === "south" ? "menu_li active" : "menu_li"}>
                       South Indian
                      </Link>
                 </li>


                 <li className="nav-link" onClick={()=>setGenre("Genre")}>
                      <Link to={'/category/telugu'} className={splitLocation[2] === "telugu" ? "menu_li active" : "menu_li"}>
                        Telugu
                      </Link>
                 </li>

                 <li className="nav-link" >
                      <Link to={'#'} className={`menu_li ${genre}`}>
                        {genre}<i class="fa fa-caret-down "></i>
                      </Link>
                      
                      <ul className="drop_menu">
                          <li onClick={()=>setGenre("Horror")}>
                            <Link to={'/category/horror'}
                             className={splitLocation[2] === "horror" ? "active" : ""}
                            >
                             Horror Movie
                            </Link><br/>
                          </li>

                          <li onClick={()=>setGenre("Action")}>
                            <Link to={'/category/action'}
                            className={splitLocation[2] === "action" ? "active" : ""}
                            >
                             Action Movie
                            </Link>
                          </li> 

                          <li onClick={()=>setGenre("Sci-Fi")}>
                            <Link to={'/category/fiction'}
                            className={splitLocation[2] === "fiction" ? "active" : ""}
                            >
                             Sci-fi Movie
                            </Link>
                          </li> 
                      </ul>

                  </li>
                



                 <li className="nav-link" onClick={()=>setGenre("Genre")}>
                      <Link to={'/category/webseries'} className={splitLocation[2] === "webseries" ? "menu_li active" : "menu_li"}>
                       Web series
                      </Link>
                 </li>
                {notify &&
                 <>
                 <li className="nav-link">
                    {no == 0 ? '':<label className="notify">{no}</label>}
                    <Link to={'/notify'} className={splitLocation[1] === "notify" ? "menu_li active" : "menu_li"}>
                      Notify
                     </Link>
                 </li>
               
                  </>
                 }


                 
                 



                
                 
              </ul>    
          </div>
         </>
    )
}
