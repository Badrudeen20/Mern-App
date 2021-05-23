import React from 'react'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Home from '../main/Home'
import Links from './Router'

import category from '../main/Category'
import DownloadPage from '../download/DownloadPage'
import Notify from '../admin/Notify'


import Search from '../main/Search'
import './Menu.css'

import Footer from '../footer/Footer'
import DMCA from '../footer/DMCA'
import About from '../footer/About'
import Contact from '../footer/Contact'





 const Menu = (props)=>{

    return (
        <>
        <Router>
         
      
        <Links />
          <Switch>
               <Route exact path='/' component={Home} />
               <Route path='/category/:category' component={category} />
               
               <Route path='/notify' component={Notify} />
              
               <Route path='/download/:id' component={DownloadPage} />
               <Route path='/search/:id' component={Search} />

               <Route path='/DMCA' component={DMCA} />
               <Route path='/About' component={About} />
               <Route path='/Contact' component={Contact} />
           </Switch>
         <Footer />
         </Router>
        </>
    )
}

export default Menu