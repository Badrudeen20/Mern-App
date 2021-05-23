import React, { useEffect, useState } from 'react'
import './Admin.css'

export default function Notify() {
  const [comment,setComment] = useState([])
  const [loading,setLoading] = useState(false)
  const [name,setName] = useState("")
  const [page,setPage] = useState(false)


    useEffect(async ()=>{
      try{
        setLoading(true)
        const res = await fetch('/notify',{
            method:"POST",
            headers:{
                "Content-Type":"Application/json"
            },
            credentials:"include",
            body:JSON.stringify({notity:true})
        })
        const data  = await res.json()
        setComment(data.user)
        setPage(true)
        setLoading(false)
      }catch(err){
          if(err){
            setLoading(false)
          }
      }
     
    },[name])

    if (loading) {
      return <h2>...</h2>
   }

  async function  CommentDelete(id) {
    const res = await fetch('/deleteNotify',{
      method:"POST",
      headers:{
          "Content-Type":"Application/json"
      },
      credentials:"include",
      body:JSON.stringify({id:id})
    })
    const data  = await res.json()
    setName(data.id.name)
  }


    return (
        <>
          {page ?
             
            <div className="comments">
          
            {comment.map((data,index)=>(
               <div className="Reponse person" key={index}>
                
               <div className="request">
                    <div className="dp">U</div>
                  <div className="request_detail">
                     <p className="request_name">{data.name}</p>
                     <p className="content">{data.content}</p>
                     <a href="#">{data.movieLink}</a>
                    </div>
                     <button className="del_comment" 
                     onClick={() => CommentDelete(data._id)}><i class="fa fa-trash-o"></i></button>
               </div>
                
           </div>
            ))}

            
        </div>
      
          :<div className="Not_Fount">Page Not Found</div>}
          
        </>
    )
}
