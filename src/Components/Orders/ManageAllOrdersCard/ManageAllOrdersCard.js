import React from 'react';

const ManageAllOrdersCard = (props) => {
        const { _id, name, img, booking, fee, email, status } = props?.booked;

        // Handle Booking Cancel:
        const handleCancelBooking = id => {
                const url = `https://rocky-bayou-98468.herokuapp.com/orders/${id}`;
                fetch(url, {
                        method: 'DELETE'
                })
                        .then(res => res.json())
                        .then(data => {
                                if (data?.deletedCount) {
                                        alert("Are you sure about cancel the tour?")
                                }
                        })
        }
        return (
                <div className="row">
                        <div className="col-lg-4">
                                <img src={img} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-6">
                                <h3>Name: {name}</h3>
                                <h4>Email: {email}</h4>
                                <h4>Tour Place: {booking}</h4>
                                <h4>Fee: {fee}</h4>
                        </div>
                        <div className="col-lg-2">
                                <div className="col-lg-2">
                                        <button onClick={() => handleCancelBooking(_id)}>Delete</button>
                                        <p>{status ? status : ''}</p>
                                        <button className="btn">✅</button>
                                </div>
                        </div>
                </div>
        );
};

export default ManageAllOrdersCard;