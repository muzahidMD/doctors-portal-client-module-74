import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const HomeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center' >
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1'>
                <h3 className='text-xl text-secondary'>Appointment</h3>
                <h2 className='text-4xl text-white'>Make an appointment Today</h2>
                <p className='text-white'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex, ab enim architecto debitis voluptatibus non quas dolorum? Sunt iusto consequatur quam inventore, qui repudiandae laborum. Nesciunt blanditiis esse molestiae fuga cumque dolor odit perferendis nihil dicta, natus magni nulla nisi!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default HomeAppointment;