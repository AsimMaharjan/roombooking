import React from 'react';
import Banner from "../components/Banner";
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
const Home = () => {
    return (
        <>
        <div className="home">
            <Banner/>
        </div>
        <Services/>
        <FeaturedRooms/>
        </>
    )
}

export default Home
