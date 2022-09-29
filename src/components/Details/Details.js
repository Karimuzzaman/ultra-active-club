import React from 'react';
import './Details.css'
const Details = ({ details }) => {

    let time = 0;

    for (const detail of details) {
        time = time + detail.time;
    }
    return (
        <div className='details'>
            <div className='user'>
                <h1>Name: Karimuzzaman</h1>
                <h2>Locationz: Rajshahi, Bangladesh</h2>
                <p>Junior Web Developer.</p>
            </div>
            <h1>Game Details:</h1>
            <h3>Time Required: {time} minutes</h3>

        </div>
    );
};

export default Details;