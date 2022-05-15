import React from 'react';
import ServiceCard from './ServiceCard';
import cavity from '../../assets/images/cavity.png'
import fluoride from '../../assets/images/fluoride.png'
import whitening from '../../assets/images/whitening.png'

const Services = () => {
    return (
        <div className='my-32 px-12'>
            <div className='text-center'>
                <h2 className='text-xl text-secondary'>OUR SERVICES</h2>
                <h2 className='text-4xl'>Services We Provide</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3'>
                <ServiceCard img={fluoride} cardTitle={"Fluoride Treatment"} cardText={"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"}></ServiceCard>

                <ServiceCard img={cavity} cardTitle={"Cavity Filling"} cardText={"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"}></ServiceCard>

                <ServiceCard img={whitening} cardTitle={"Teeth Whitening"} cardText={"Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"}></ServiceCard>
            </div>
        </div>
    );
};

export default Services;