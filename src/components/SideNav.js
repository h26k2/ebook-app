import React from 'react'
import {NavLink} from 'react-router-dom'

const SideNav = () => {

    return(
        <ul className="sidenav" id="mobile-nav">
            <li><NavLink to ={'/'} >Home</NavLink></li>
            <li><NavLink to ={'/search'} >Search</NavLink></li>
        </ul>
    )

}

export default SideNav;