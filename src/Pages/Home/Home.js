import React from 'react';
import Banner from './Banner';
import ContactForm from './ContactForm';
import Footer from '../Shared/Footer';
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
            <ContactForm></ContactForm>
            <Footer></Footer>
        </div>
    );
};

export default Home;