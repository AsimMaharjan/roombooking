import React from "react"
//import Search from "./Search";
import { useState } from "react";
import { useHistory } from "react-router-dom";
function Banner() {
    const history = useHistory();
    const [showSearch,setShowSearch]=useState(false);
    return (
        <div className="banner">
            <div className="banner_search">
                {showSearch && <h1>date</h1>}
                <button onClick={()=>setShowSearch(!showSearch)} className="banner_searchButton">{showSearch ?"Hide":"Search Dates"}</button>
            </div>
            <div className="banner_info">
                <h1>
                    Get out and stretch your imagination
                </h1>
                <h5>
                    Plan a different kind of gateway to uncover hidden gems near you
                </h5>
                <button onClick={() => history.push('/hotels')} className="btn-primary">Explore Nearby</button>
            </div>
        </div>
    )
}

export default Banner
