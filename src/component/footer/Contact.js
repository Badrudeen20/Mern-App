import React from 'react'
import './Footer.css'

export default function Contact() {
    return (
        <>
            <div className="contact">
                <h2>Contact Us</h2>
                <p>Please use English language for your messages. 
                    If you have a problem with English, you can use 
                    <a href="http://translate.google.com/" target="_blank"> Google Transalte</a> 
                    </p>
            <form className="flex" onSubmit="">
   
   <div className="form-group">
      <span>Leave a comment</span>
      <textarea type="text"
      rows="4" cols="80"
         name="content"
         value=""
         onChange=""
         required></textarea>
  
   </div>

   <div className="form-group">
      <span>Email</span>
      <input type="email"
         name="name"
         value=""
         onChange=""
         required/>
    
   </div>

   <div className="form-group">
      <span>Name</span>
      <input type="text"
         name="name"
         value=""
         onChange=""
         required/>
    
   </div>

 <button type="submit" >Submit</button>
</form>
            </div>
        </>
    )
}
