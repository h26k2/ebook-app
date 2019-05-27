import React from 'react'
import {BrowserRouter , Route , Switch } from 'react-router-dom'
import Home from '../Screens/Home'
import Search from '../Screens/Search'
import Four0Four from '../Screens/Four0Four';
import Nav from '../components/Nav';
import Post from '../Screens/Post';
import SideNav from '../components/SideNav';
import M from 'materialize-css'

class Routes extends React.Component{
    render(){
        return(
            <BrowserRouter>
                <Nav />
                <SideNav />
                <Switch>
                    <Route exact path={'/'} component={Home}/>
                    <Route path={'/search'} component={Search} />
                    <Route path={'/posts/:post_id'} component={Post} />
                    <Route path={'*'} component={Four0Four} />
                </Switch>
            </BrowserRouter>
        )
    }

    componentDidMount(){

        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.sidenav');
            M.Sidenav.init(elems);
        });
        
    }

}

export default Routes;