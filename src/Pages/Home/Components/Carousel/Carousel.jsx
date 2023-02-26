import React from 'react';
import img1 from './assets/caroselimg1/29302.jpg'
import img2 from './assets/caroselimg2/4958173.jpg'
import img3 from './assets/caroselimg3/123864-OQYPO8-945.jpg'
import img4 from './assets/caroselimg4/promo_online_3.jpg'
import img5 from './assets/caroselimg5/19299.jpg'

const Carousel = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full">
                    <img src={img1} className="w-full" />
                </div> 
                <div id="item1" className="carousel-item w-full">
                    <img src={img2} className="w-full" />
                </div> 
                <div id="item1" className="carousel-item w-full">
                    <img src={img3} className="w-full" />
                </div> 
                <div id="item1" className="carousel-item w-full">
                    <img src={img4} className="w-full" />
                </div> 
                <div id="item1" className="carousel-item w-full">
                    <img src={img5} className="w-full" />
                </div> 
            </div> 

            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a> 
                <a href="#item2" className="btn btn-xs">2</a> 
                <a href="#item3" className="btn btn-xs">3</a> 
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Carousel;