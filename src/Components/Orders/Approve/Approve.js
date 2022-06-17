import React from 'react';

const Approve = (props) => {
        const { booked } = props;
        const { _id } = props.booked;
        const handleStatus = id => {
                const url = `https://rocky-bayou-98468.herokuapp.com/orders/${id}`;
                fetch(url, {
                        method: 'PUT',
                        headers: {
                                'content-type': 'application/json'
                        },
                        body: JSON.stringify(booked)
                })
                        .then(res => res.json())
                        .then(data => {
                                if (data.matchedCount > 0) {
                                        alert("Successfully Approved Status")
                                }
                        })
        }
        return (
                <div>
                        <button onClick={() => handleStatus(_id)} className="btn">✅</button>
                </div>
        );
};

export default Approve;