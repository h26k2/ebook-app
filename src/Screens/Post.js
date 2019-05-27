
import React from 'react'
import {connect} from 'react-redux'
import WideHeader from '../components/WideHeader'
import image from '../images/compress-c1.jpg'
import PostContent from '../components/PostContent';

class Post extends React.Component{

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.props.deletePost(this.props.photos.id);
        this.props.history.replace('/');
    }

    render(){

        return(
            <div className="app post">

                <WideHeader height="600px" bgImage={image} text={"Read Your favourite posts"} author={this.props.photos.author} />     
                <PostContent post={this.props.photos} onDelete={this.handleClick}/>
                <div className="container">
                    <div className="row">
                        <div className="col s12">
                            <button className="btn waves-effect waves-light pink darken-2 btn-large" onClick={this.handleClick}>delete post</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}   

const mapStateToProps = (state , ownProps) => {

    let id = ownProps.match.params.post_id;
    
    return{
        photos : state.photos.find( photo => {
            return photo.id.toString()  === id
        })
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        deletePost : (id) => {
            dispatch({type:'DELETE_POST',id : id})
        }
    }
}


export default connect(mapStateToProps , mapDispatchToProps)(Post);