import React from 'react';
import servicesBanner from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const ServicesBanner = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row bg-local bg-cover" >
                <img src={servicesBanner} class="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl pr-[138px] font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p class="py-6 pr-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ServicesBanner;