/* eslint-disable no-unused-vars */
import React from 'react';
import Banner from './Banner/Banner';
import Stat from './Stat/Stat';
import Features from './Features/Features';
import Goals from './Goals/Goals';
import Reviews from './Reviews/Reviews';
import FAQs from './FAQs/FAQs';
import Update from './Update/Update';
import momentDurationFormatSetup from "moment-duration-format";
import moment from 'moment';



const Home = () => {

    // momentDurationFormatSetup(moment);
    //   const durationSeconds = (endsAt - startsAt) / 1000;
    //   const duration = moment.duration(durationSeconds, "seconds").format("mm");


    // const dur = moment.duration(24,)
    // console.log(dur.humanize())



    const time = new Date();
    time.setDate(time.getDate() + 24);
    return (
        <div className='min-h-screen'>
            <Banner></Banner>
            <Stat></Stat>
            <Features></Features>
            <Goals></Goals>
            <Update expiryTimestamp={time}></Update>
            <Reviews></Reviews>
            <FAQs></FAQs>
        </div>
    );
};

export default Home;