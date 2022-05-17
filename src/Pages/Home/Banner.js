import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'
import PrimaryButton from '../Shared/PrimaryButton';

const Banner = () => {
    return (
        <div className=" flex min-h-screen px-12">
            <div style={{ backgroundImage: `url(${bg})` }} className="hero-content flex-col lg:flex-row-reverse bg-local bg-cover" >
                <img src={chair} className="max-w-lg w-96 lg:w-full rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 className="text-5xl lg:pr-[138px] font-bold">Your New Smile Starts Here</h1>
                    <p className="py-6 pr-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;