import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots } = treatment;
    const [user] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        const booking = {
            treatmentId: _id,
            treatment: name,
            date: formattedDate,
            slot,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value
        };

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast.success(`Success Your Appointment, ${formattedDate} at ${slot}`);
                }
                else {
                    toast.error(`You already have an appointment on ${data.booking?.date} at ${data.booking?.slot}`);
                }
                refetch();
                //to close the modal
                setTreatment(null);
            })
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold  text-xl"> {name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-flow-row gap-4 mt-12'>
                        <input type="text" disabled value={format(date, "PP")} className="input input-bordered input-md w-full lg:max-w-lg" />
                        <select name="slot" className="select select-bordered w-full lg:max-w-lg">
                            {
                                slots.map((slot, index) => <option
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>
                        <input type="name" name='name' disabled value={user.displayName || ''} className="input input-bordered input-md w-full lg:max-w-lg" />
                        <input type="email" name='email' disabled value={user.email || ''} className="input input-bordered input-md w-full lg:max-w-lg" />
                        <input type="number" name='phone' placeholder="Phone Number" className="input input-bordered input-md w-full lg:max-w-lg" />
                        <input type="submit" value={'Submit'} className="input input-bordered input-md w-full lg:max-w-lg bg-accent text-white uppercase" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;