import React, { useState } from 'react'
import Axios from 'axios'
import './Reply.css'
import ReplyTo from './ReplyTo'

export default function Reply(props) {
   const [error,setError] = useState("")
    const [toggle,setToggle] = useState(false)
    const [comment ,setComment] = useState({
        name:"",
        content:""
    })

    const handleInput = (e)=>{
        setComment({...comment,[e.target.name]:e.target.value})
   }


   const onSubmit = (e)=>{
    e.preventDefault()
    if(comment.content === "" || comment.name === "" ) return setError("Fill the required filed !")
    const variable = {
       content:comment.content,
       name:comment.name,
       postId:props.postId,
       responseTo:props.comment._id
    }
  
    Axios.post('http://localhost:5000/Postcomment',variable)
    .then(res =>{
    setComment({
          content:"",
             name:""
       })
       setToggle(false)
       props.refreshFunction(res.data)

}).catch(err =>{
     console.log(err)
})

}


//day of comment
var date1, date2;   
date1 = new Date();  
date2 = new Date (props.comment.createdAt);  
var total_seconds = Math.abs(date2 - date1) / 1000; 
var days_difference = Math.floor (total_seconds / (60 * 60 * 24));  


    return (
        <>
              <div className="Reponse">
                <div className="request">
                
                     <div className="dp">{props.comment.name.toUpperCase().charAt(props.comment.name[0])}</div>
                   <div className="request_detail">
                      <p className="request_name">{props.comment.name}</p>
                      <p className="content">{props.comment.content}</p>
                      <div className="reply"><p>{days_difference===0 ? 'Today':days_difference+' days ago'} 
                      </p><span onClick={()=>setToggle(val=>!val)}><i class="fa fa-comment-o"></i> Reply</span></div>
                     </div>
                </div>    
      
                                       <ReplyTo commentList={props.parentId} 
                                          postId={props.postId} 
                                          parentId={props.comment._id}
                                          refreshFunction={props.refreshFunction}
                                        />       

                {toggle && 
                    <form className="flex" onSubmit={onSubmit}>
   
                    <div className="form-group">
                       <span>Leave a comment</span>
                       <textarea type="text"
                          name="content"
                          value={comment.content}
                          onChange={handleInput}
                          required></textarea>
                   
                    </div>
                 
                    <div className="form-group">
                       <span>Name</span>
                       <input type="text"
                          name="name"
                          value={comment.name}
                          onChange={handleInput}
                          required/>
                    </div>

                    <p style={{textAlign:"center",marginTop:"10px"}}>{error}</p>
                  <button type="submit" onClick={onSubmit}>Submit</button>
                 </form>
                }


              </div>
        </>
    )
}
