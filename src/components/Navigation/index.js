import React from 'react'
import { Link, withRouter } from 'react-router-dom'

const menu = [
    {
        name:"Home",
        link:"/"
    },
    {
        name:"Incomplete Todos",
        link:"/all_incomplete"
    },
    {
        name:"Dashboard",
        link:"/dashboard"
    },
]

 function Navigator({history}) {
    console.log(history)
    return (
        <div className="nav">
            <ul>
           {menu.map((item) =>{
               const activeClass = item.link === history.location.pathname ? "active" : ""
               return( 
                <li><Link className={activeClass} to={item.link}>{item.name}</Link></li>
               )
            })}
           </ul>
        </div>
    )
}

export default withRouter(Navigator)
