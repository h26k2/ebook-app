
import React from 'react'

const WideHeader = (propsData) => {

    const styles = {
        height : propsData.height,
        background : `url(${propsData.bgImage})  bottom center / cover no-repeat`,
        backgroundAttachment : "fixed"
    }

    return(
        <div className='container-fluid wide-header' style={styles} >
            <div>
                <h1>{propsData.text}</h1>
                <h2>By : {propsData.author}</h2>
            </div>
        </div>
    )
}

export default WideHeader;

