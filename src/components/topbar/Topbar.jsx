import React from 'react'
import "./topbar.scss"
import {Person,Mail} from '@material-ui/icons'

export default function Topbar({menuOpen,setmenuOpen}) {
  return (
    
      <div className={"topbar "+ (menuOpen && "active")}>
        <div className="wrapper">
          <div className="left">
            <a href="#intro" className="logo">Tite.</a>
            <div className="item_container">
               <Person className="icon"/>
               <span>+44 924 12 74</span>
            </div>
            <div className="item_container">
               <Mail className="icon"/>
               <span>titealvarado@gmail.com</span>
            </div>
          </div>
          <div className="right">
            <div className="hamburger" onClick={()=>setmenuOpen(!menuOpen)}>
              <span className="line1"></span>
              <span className="line2"></span>
              <span className="line3"></span>
            </div>
          </div>
        </div>
      </div>
  )
}
