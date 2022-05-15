import React from 'react';

const ServiceCard = ({ img, cardTitle, cardText }) => {
    return (
        <div class="card w-96 bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img className='w-20' src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title text-xl">{cardTitle}</h2>
                <p>{cardText}</p>
            </div>
        </div>
    );
};

export default ServiceCard;