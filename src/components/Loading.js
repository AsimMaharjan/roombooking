import React from 'react'
import loadingGif from '../images/gif/loading-arrow.gif'

function loading() {
    return (
        <div className="loading">
            <h4>Hotels data loading...</h4>
            <img src={loadingGif} alt=""/>
        </div>
    )
}

export default loading
