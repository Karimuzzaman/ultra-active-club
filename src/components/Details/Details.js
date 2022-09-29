import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Breaktime from '../Breaktime/Breaktime';
import './Details.css'
const Details = ({ details, setDetails }) => {
    const [breakTime, setBreakTime] = useState([]);


    const handleClick = (e) => {
        setBreakTime(e);

        const prevBookmark = localStorage.getItem("value");
        const oldBookmark = JSON.parse(prevBookmark);

        if (oldBookmark) {
            localStorage.setItem("value", JSON.stringify([...oldBookmark, e]));
            setBreakTime(e);

        }
        else {
            localStorage.setItem("value", JSON.stringify([e]));
            setBreakTime(e);

        }
    }

    useEffect(() => {

        const a = localStorage.getItem("value");
        const b = JSON.parse(a);

        setBreakTime(b);





    }, [])







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

            <div className='break'>
                <h1>Add A Break:</h1>
                <div className='btn-group'>
                    <button value={10} onClick={(e) => handleClick(e.target.value)}>10s</button>
                    <button value={20} onClick={(e) => handleClick(e.target.value)} className='btn-2'>20s</button>
                    <button value={30} onClick={(e) => handleClick(e.target.value)} className='btn-2'>30s</button>
                    <button value={40} onClick={(e) => handleClick(e.target.value)} className='btn-2'>40s</button>
                    <button value={50} onClick={(e) => handleClick(e.target.value)} className='btn-2'>50s</button>

                </div>

            </div>
            <h1>Game Details:</h1>
            <h3 className='time'>Gaming Time: {time} minutes</h3>
            <h3 className='time'>Break Time:  {breakTime}seconds</h3>



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