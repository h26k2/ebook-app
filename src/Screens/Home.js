import React from 'react'

import {connect} from 'react-redux'
import RenderCards from '../components/RenderCards';

class Home extends React.Component{

    render(){

        return(
            <div className="app home">
                <div className="container">
                    <div className="row">
                        <RenderCards items={this.props.photos} containerClasses="col s12 m6 l4 "/>
                    </div>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return{
        photos : state.photos
    }
}


export default connect(mapStateToProps)(Home);
