import React from 'react';
import appointment from '../../assets/images/appointment.png'

const ContactForm = () => {
    return (
        <section style={{ background: `url(${appointment})` }} className='py-16 '>
            <div className='w-1/2 mx-auto text-center'>
                <div className='mb-10'>
                    <h3 className='text-xl text-secondary '>Contact Us</h3>
                    <h2 className='text-4xl text-white'>Stay connected with us</h2>
                </div>
                <form className=' grid grid-cols-1 gap-4 justify-items-center'>
                    <input type="email" placeholder="Email" className="input input-bordered input-sm w-full max-w-md" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-md" />
                    <textarea className="textarea textarea-bordered w-[63%] h-24" placeholder="Bio"></textarea>
                    <input type="submit" value="Submit" placeholder="Type here" className="input input-bordered  w-[15%] max-w-xs text-white text-sm  font-bold bg-gradient-to-r from-secondary to-primary" />
                </form>
            </div>
        </section>
    );
};

export default ContactForm;