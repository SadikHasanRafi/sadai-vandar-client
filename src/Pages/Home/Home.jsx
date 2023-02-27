import React from 'react';
import Banner from './Components/Banner/Banner';
import Carousel from './Components/Carousel/Carousel';
import Services from './Components/Services/Services';

const Home = () => {
   
    return (
        <div>
            <Carousel></Carousel>
            <Banner></Banner>
            <Services></Services>
            
        </div>
    );
};

export default Home;