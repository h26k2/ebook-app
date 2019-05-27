
import React from 'react'
import {Link} from 'react-router-dom'

const RenderCards = (data , containerClasses) => {
    
    let content = [];


    Array.from(data.items).forEach((item)=>{
        
        let styles = {
            background : `url(${item.thumbnailUrl}) center / cover no-repeat`
        }

        content.push(
            <div className={data.containerClasses} key={item.id}>
                <div className="card">
                    <div className="card-image" style={styles}></div>
                    <div className="card-content">
                        <Link to={`/posts/${item.id}`} className="card-title">{item.title}</Link>
                    </div>
                </div>
            </div>
        )
    })


    return  content;

}


export default RenderCards;