import React from 'react';

const InfoCard = ({ img, cardTitle, cardDes, bgClass }) => {
    return (
        <div class={`card px-6 py-12 lg:card-side bg-base-100 ${bgClass} shadow-xl `}>
            <figure>
                <img src={img} />
            </figure>
            <div class="card-body">
                <h2 class="card-title">{cardTitle}</h2>
                <p>{cardDes}</p>
            </div>
        </div>
    );
};

export default InfoCard;