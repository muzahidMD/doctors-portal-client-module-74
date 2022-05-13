import React from 'react';
import chair from '../../assets/images/chair.png'
import bg from '../../assets/images/bg.png'

const Banner = () => {
    return (
        <div class="hero min-h-screen px-12">
            <div style={{ backgroundImage: `url(${bg})` }} class="hero-content flex-col lg:flex-row-reverse bg-local bg-cover" >
                <img src={chair} class="max-w-lg rounded-lg shadow-2xl" />
                <div>
                    <h1 class="text-5xl pr-[138px] font-bold">Your New Smile Starts Here</h1>
                    <p class="py-6 pr-10">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <button class="btn btn-secondary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;