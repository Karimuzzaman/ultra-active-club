import React from 'react';
import './Details.css'
const Details = ({ details }) => {

    let time = 0;

    for (const detail of details) {
        time = time + detail.time;
    }
    return (
        <div className='details'>
            <h3>Time Required: {time} minutes</h3>

        </div>
    );
};

export default Details;