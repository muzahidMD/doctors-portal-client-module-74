import React from 'react';
import servicesBanner from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const ServicesBanner = () => {
    return (
        <div className="hero min-h-screen px-12">
            <div className="hero-content flex-col lg:flex-row bg-local bg-cover" >
                <img src={servicesBanner} className="max-w-sm w-80 lg:w-full rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 className="text-5xl pr-[138px] font-bold">Exceptional Dental Care, on Your Terms</h1>
                    <p className="py-6 pr-10">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default ServicesBanner;