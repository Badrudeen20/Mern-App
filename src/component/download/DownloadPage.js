import React, { useEffect, useState } from  'react'
import { Link } from 'react-router-dom'
import Comment from './Comment'
import Sidebar from './Sidebar'
import Loading from '../loading/Loading'
import './Download.css'

const Download = (props)=>{

   const [loading,setLoading] = useState(false) 
   const [movie,setMovie] = useState([])
   const [commentList,setCommentList] = useState([])
   const [search,setSearch]  = useState("")
   const [recent,setRecent] = useState(null)

useEffect(()=>{

  //getmovie
    const fetchPost = async ()=>{
        setLoading(true)
        const res = await fetch('/download',{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            body:JSON.stringify({id:props.match.params.id})
      })
      const data  = await res.json()
        setMovie(data)
        setLoading(false)
     }
    fetchPost() 

    //getcomment
    const fetchComment = async ()=>{
      setLoading(true)
      const res = await fetch('/Getcomment',{
        method:"POST",
        headers:{
            "Content-Type":"Application/json"
        },
        body:JSON.stringify({id:props.match.params.id})
  })
  const data  = await res.json()
      setCommentList(data)
      setLoading(false)
}
fetchComment() 
window.scrollTo(0, 0)

},[recent])


//updatecomment
const updateComment = (newComment)=>{
  setCommentList(commentList.concat(newComment))
}


//handleinput

const handleInput = (e) =>{
//  this.setState({search:e.target.value})
    setSearch(e.target.value)
 }
 
 //onsubmit
 const onSubmit = async (e)=>{
    e.preventDefault()
    if(search === "") return    
    document.getElementById('search').click();
 }
 


if (loading && movie.length === 0) {
    return <Loading />
  }

    return(
        <>
        {movie.map((data,key) =>(
        <div className="main" key={key}>
          <div className="download">
                        

          <div className="poster_cover">
  
   <div className="poster">
      <h2>{data.name}</h2>
      <div className="movie_poster">
         <img src={data.image} />
      </div>
      <br/> 
      <div className="imdb">
         <strong>Rating:<span className="data">{data.rating}</span></strong>
         <br/>
         <strong>Genre:<span className="data">{data.genres}</span></strong>
      </div>
      <div className="imdb">
         <strong>Director:<span className="data">{data.director}</span></strong>
         <br/>
         <strong>Artist:<span className="data">{data.cast}</span></strong>
      </div>
      <div className="imdb">
         <strong>Language:<span className="data">{data.language}</span></strong>
         <br/>
         <strong>Quality:<span className="data">{data.quality}</span></strong>
      </div>
      <div className="imdb">
         <strong>Story:<span className="data">{data.story}</span></strong>   
      </div>
      <img src={data.screenshot} />
   </div>
   <div className="download_btn">
      {data.watchonline==='null' ? "":<a href={data.watchonline} className="torrent_link">Watch online</a>}
      <br/>
      {data.link4==='null' ? "":<a href={data.link4} className="torrent_link">Download 480P</a>}
      <br/>
      {data.link7==='null' ? "" :<a href={data.link7} className="torrent_link">Download 720P</a>}
   </div>
     
         <div className="download_search">
         <form onSubmit={onSubmit}>
                  <input type="text" name="search"
                   value={search}
                   onChange={handleInput}
                   />
                  <button type="submit" onClick={onSubmit}>Search</button>
                           <Link to={{pathname:`/search/${search}`}} id="search" className="hide">search</Link>
               </form>
           </div>

           <Comment movieLink={data.name}  commentList={commentList} 
       postId={props.match.params.id}  refreshFunction={updateComment} />

</div>

             <div className="download_sidebar">
                <Sidebar Recent={setRecent} />
             </div>
        </div>
    </div>
 ))} 
        </>
    )
}
export default Download