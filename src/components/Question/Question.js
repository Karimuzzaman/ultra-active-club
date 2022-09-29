import React from 'react';
import './Question.css'

const Question = () => {
    return (
        <div>
            <div className='first-q'>
                <h2> Q1. How does React work?</h2>
                <p>ReactJS divides the UI into isolated reusable pieces of code known as components. React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props.Returned React elements determine how the UI will look at the client end.It’s possible to have as many components as necessary without cluttering code.React is not a framework. It is just a library developed by Facebook to solve some problems that we were facing earlier.</p>

            </div>
            <div className='second-q'>
                <h2> Q2. What are the differences between props & state?</h2>
                <p> </p>

            </div>
            <div className='third-q'>

            </div>

        </div>
    );
};

export default Question;