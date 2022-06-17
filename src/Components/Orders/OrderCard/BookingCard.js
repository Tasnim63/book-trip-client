import React from 'react';

const BookingCard = (props) => {
        const { _id, name, booking, status } = props.booked;

        // Handle Booking Cancel:
        const handleCancelBooking = id => {
                const response = window.confirm("Are you sure about cancel the tour?")
                if (response === true) {
                        const url = `https://rocky-bayou-98468.herokuapp.com/orders/${id}`;
                        fetch(url, {
                                method: 'DELETE'
                        })
                                .then(res => res.json())
                                .then(data => {
                                        if (data.deletedCount) {

                                        }
                                })
                }
                else {
                        return false
                }
        }
        return (
                <div className="row mx-auto">
                        <h6 className="col-3">{name}</h6>
                        <h6 className="col-2">{booking}</h6>
                        <h6 className="col-2 text-center">
                                <button onClick={() => handleCancelBooking(_id)} className="btn">❌</button>
                        </h6>
                        <h6 className="col-2">{status}</h6>
                </div>
        );
};

export default BookingCard;