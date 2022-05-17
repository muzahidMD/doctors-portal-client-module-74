import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';

const AvailableAppointments = ({ date }) => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('service.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className='text-center'>
                <h3 className='text-secondary text-xl'>Available Appointment on : {format(date, 'PP')} </h3>
                <p className='text-gray-400'>Please select a service.</p>
            </div>
            <div>
                {

                }
            </div>
        </div>
    );
};

export default AvailableAppointments;