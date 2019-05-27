import React from 'react'
import {connect} from 'react-redux'
import Form from '../components/Form';
import {Link} from 'react-router-dom'

class Search extends React.Component{
    
    constructor(props){
        super(props);
        this.state = {
            inputtedSomething : false , 
            text : ''
        }
        this.searchItem = this.searchItem.bind(this);
    }
    
    render(){

        let resultingItem = [];

        if(!this.state.inputtedSomething){
            resultingItem = (<div className="status-text blue-text">Please search a book first!</div>)
        }
        else{

            Array.from(this.props.photos).forEach(photo => {

                let styles = {
                    background : `url(${photo.thumbnailUrl}) center / cover no-repeat`
                }

                if(photo.title.toLowerCase().indexOf(this.state.text.toLowerCase()) !== -1){
                    resultingItem.push(
                        <div className="col s12 m6 l4" key={photo.id}>
                            <div className="card" >
                                <div className="card-image" style={styles}></div>
                                <div className="card-content">
                                    <Link to={`/posts/${photo.id}`} className="card-title">{photo.title}</Link>
                                </div>
                            </div>
                        </div>
                    )
                }
            })


        }

        if(resultingItem.length < 1){
            resultingItem.push(
                <div key={1} className="status-text red-text">We're unable to find this book!</div>
            )
        }

        
        return(
            <div className="app container search">
                <Form onSearch={this.searchItem}/>
                <div className="row">
                    {resultingItem}
                </div>
            </div>
        )
    }

    searchItem(text , userInputCheck){
        this.setState({
            inputtedSomething : userInputCheck,
            text : text
        })
    }

}

const mapStateToProps = (state) => {
    return{
        photos : state.photos
    }
}

export default connect(mapStateToProps)(Search);