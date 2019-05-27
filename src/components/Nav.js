
import React from 'react'
import {Link , NavLink} from 'react-router-dom'

const Nav = () =>{
    return(
        <nav>
            <div className="nav-wrapper pink darken-3">
                <Link to={'/'} className="brand-logo">React App</Link>
                <Link to="#" data-target="mobile-nav" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                <ul className="right hide-on-med-and-down">
                    <li><NavLink to ={'/'} >Home</NavLink></li>
                    <li><NavLink to ={'/search'} >Search</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Nav;