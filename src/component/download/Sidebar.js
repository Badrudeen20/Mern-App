import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import './Sidebar.css'

export default class Sidebar extends Component {
   constructor(props){
    super(props)
    this.state={
        recent:[],
        loading:false
     }
   
   }

   componentDidMount() {
    try{
        const fetchPost = async() => {
            this.setState({loading:true})
            const res = await fetch('/recent', {
                method: "GET",
                headers: {
                  Accept: "application/json",
                  "Content-Type": "application/json"
                },
                credentials: "include"
              })
              const data = await res.json()
              this.setState({recent:data})
              this.setState({loading:false})
        }
        fetchPost()
    }catch(err){
        console.log(err)
    }

   }

   



    render() {
           
        if (this.state.loading) {
            return <h2>...</h2>
          }
  
         return (
            <>
                  <div className="download_side">
         
           <div className="download_recent">
               <h3 className="download_rec_text">Recent Post</h3>
               <ul className="download_recent_post">
                   {this.state.recent.map((data,index)=>(
                        <li onClick={()=>this.props.Recent(data._id)}>
                        <Link  to={`/download/${data._id}`}>
                           <img src={data.image}></img>
                        </Link>

                        <Link to={`/download/${data._id}`}>
                        {data.name}
                        </Link>
                      
                    </li>
                   ))}
               </ul>
           </div>
        </div>
            </>
        )
    }
}
