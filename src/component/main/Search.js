import React,{useState,useEffect} from 'react'
import Sidebar from './sidebar/Sidebar'
import {useSelector} from 'react-redux'
import { useLocation } from 'react-router-dom'
import Axios from 'axios'
import Pagination from './searchPagination/Pagination'
import { Link } from 'react-router-dom'
import './Main.css'

export default function Search() {
 const search = useSelector(store => store.store)
 const [movie, setMovie]  = useState([])
 const [loading, setLoading] = useState(false)
 const [currentPage, setCurrentPage] = useState(1)
 const [postsPerPage] = useState(9)
 const location = useLocation();
 const { pathname } = location;
 const splitLocation = pathname.split("/");



  useEffect(()=>{
    const fetchPost = async ()=>{
         setLoading(true)
         const res = await Axios.post('http://localhost:5000/search',{search:splitLocation[2]})
         setMovie(res.data)
         setLoading(false)
   }
  fetchPost()
  },[pathname])
  if (loading) {
    return <h2>Loading...</h2>
 }

 const indexOfLastPost = currentPage * postsPerPage;
 const indexOfFirstPost = indexOfLastPost - postsPerPage;
 const currentPosts = movie.slice(indexOfFirstPost, indexOfLastPost)
 const howManyPages = Math.ceil(movie.length/postsPerPage)


    return (
      <>
            <div className="main">
                <div className="wrapper">
                    <div className="content">
                       <div className="post">
                           <h3>Recent Video</h3>
                       </div>

                       <div className="archive">

                       <ul>
                 {currentPosts.map((post,index)=>(
                 
                  <li key={index}>
                      <div className="cover">
                       <Link to={{pathname:`/download/${post._id}`}}>
                          <img src={post.image}
                            alt={post.name} />
                        </Link> 
                        <Link className="text" to={{pathname:`/download/${post._id}`}}>
                         {post.name}
                        </Link> 
               
                      </div>      
                  </li> 

                 ))}
                    
                                        
           </ul>



                       </div>
                        {movie.length>0 && 
                         <div className="pagination_container">
                         <Pagination
                          page={howManyPages}
                          setCurrentPage={setCurrentPage}
                         />
                        </div>
                        }

                        {movie.length===0 && 
                         <div className="no_data">No Result Found</div>
                        }
                           
                    </div>
                    <div className="sidebar">
                          <Sidebar />
                    </div>
                </div>
            </div>
        </>
    )
}
