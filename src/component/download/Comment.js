import React, { useState } from 'react'
import Axios from 'axios'
import './Comment.css'
import Reply from './Reply'
import ReplyTo from './ReplyTo'

export default function Comment(props) {
   const [error,setError] = useState("")
   const [comment ,setComment] = useState({
         name:"",
      content:""
  })

const handleInput = (e)=>{
     setComment({...comment,[e.target.name]:e.target.value})
}
 

const onSubmit = (e)=>{
    e.preventDefault()
    if(comment.content === "" || comment.name === "" ) return setError("Fill the required field !")
    const variable = {
       content:comment.content,
       name:comment.name,
       postId:props.postId,
       movieLink:props.movieLink
    }
  
    Axios.post('http://localhost:5000/Postcomment',variable)
    .then(res =>{
    setComment({
          content:"",
             name:""
       })
      setError("")
       props.refreshFunction(res.data)

}).catch(err =>{
     console.log(err)
})




}

 return (     
<div className="comment">
 
   <form className="flex" onSubmit={onSubmit}>
   
      <div className="form-group">
         <span>Leave a comment</span>
         <textarea type="text" rows="4" cols="80"
            name="content"
            value={comment.content}
            onChange={handleInput}
            required></textarea>  
      </div>

      <div className="form-group user_name">
         <span>Name</span>
         <input type="text"
            name="name"
            value={comment.name}
            onChange={handleInput}
            required/>
      </div>

      <p className="required" style={{textAlign:"center",marginTop:"10px"}}>{error}</p>
 <button type="submit" onClick={onSubmit}>Submit</button>
   </form>
    
     {props.commentList && props.commentList.map((comment,index)=>(
        (!comment.responseTo && 
        
         <React.Fragment>
            
            <Reply comment={comment}
             postId={props.postId} 
             refreshFunction={props.refreshFunction}
             parentId={props.commentList}
             />
              

          </React.Fragment>
        )
 ))}
</div>
      
  )
}

/*

  <ReplyTo commentList={props.commentList} 
              postId={props.postId} 
              parentId={comment._id}
              refreshFunction={props.refreshFunction}
            />
            */