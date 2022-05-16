import React from 'react';
import Banner from './Banner';
import HomeAppointment from './HomeAppointment';
import Info from './Info';
import Services from './Services';
import Testimonials from './Testimonials ';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <HomeAppointment></HomeAppointment>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;