
import React from 'react'

class Form extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            currentBook : ''
        }
        this.handleChange = this.handleChange.bind(this);

    }

    render(){
        return(
            <div>
                <h2 className="center">Search your favorite book</h2>
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <div className="col s12 input-field">
                            <input type="text" placeholder="What are you looking for ?" id="search-input" 
                            onChange = {this.handleChange}/>
                            <label labelfor="search-input">Enter Book name</label>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

    handleChange(e){
        
        let text  = e.target.value;

        const status = (text.length < 1) ? false : true;

        this.setState({
            currentBook : text
        });

        this.props.onSearch(text , status);


    }

    handleSubmit(e){
        e.preventDefault();
    }


}

export default Form;