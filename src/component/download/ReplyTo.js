import React from 'react'
import Reply from './Reply'
export default function ReplyTo(props) {
    return (
        <>
              {props.commentList && props.commentList.map((comment,index)=>(
                      
                           <React.Fragment>
                             
                               {comment.responseTo === props.parentId && 
                                 <div className="replyTo">
                                         
                                         <Reply comment={comment}
                                   postId={props.postId} 
                                   refreshFunction={props.refreshFunction} />

                                     <ReplyTo commentList={props.commentList} 
                                          postId={props.postId} 
                                          parentId={comment._id}
                                          refreshFunction={props.refreshFunction}
                                      />
                                          

                                 </div>
                               }
                               
                          </React.Fragment>
                      
                ))}
               
        </>
    )
}
