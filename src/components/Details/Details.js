import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Details.css'
const Details = ({ details }) => {

    const notify = () => toast("Congratulation!!! you have clicked the button ");

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
            <h3 className='time'>Time Required: {time} minutes</h3>

            <div>
                <button className='btn-activity' onClick={notify}>Activity Completed</button>
                <ToastContainer
                    position="top-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>

        </div>
    );
};

export default Details;