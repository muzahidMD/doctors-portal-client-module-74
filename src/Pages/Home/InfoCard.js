import React from 'react';

const InfoCard = ({ img, cardTitle, cardDes, bgClass }) => {
    return (
        <div className={`card px-6 py-12 lg:card-side  ${bgClass} shadow-xl `}>
            <figure>
                <img src={img} alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{cardTitle}</h2>
                <p>{cardDes}</p>
            </div>
        </div>
    );
};

export default InfoCard;