import React from 'react';

const service = ({ service, setTreatment }) => {
    const { name, slots } = service;

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl  ">
            <div className="card-body text-center py-10">
                <h2 className="text-secondary font-semibold text-xl">{name}</h2>
                <p className='text-sm'>
                    {
                        slots.length
                            ? <span>{slots[0]}</span>
                            : <span className='text-red-500'>Try another day.</span>
                    }
                </p>
                <p className='text-xs'>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center mt-5">
                    <label htmlFor="booking-modal"
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(service)}
                        className="btn btn-sm lg:btn-md btn-secondary text-white font-bold bg-gradient-to-r from-secondary to-primary"
                    >
                        Book Appointment
                    </label>
                </div>
            </div>
        </div>
    );
};

export default service;