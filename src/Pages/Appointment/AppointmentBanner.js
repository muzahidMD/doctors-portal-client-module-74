import React from 'react';
import chair from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({ date, setDate }) => {

    return (
        <div className="hero min-h-screen ">
            <div className="hero-content justify-around flex-col lg:flex-row-reverse">
                <img src={chair} className="max-w-lg w-96 lg:w-full rounded-lg shadow-2xl" alt='Dentist Chair' />
                <div className='lg:mr-32 shadow-xl rounded-xl mt-16 lg:mt-0'>
                    <DayPicker
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                    />
                </div>
            </div>
        </div>
    );
};

export default AppointmentBanner;