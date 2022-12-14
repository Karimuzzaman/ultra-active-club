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
                <p> <b>Props: <br /></b>
                    1. The Data is passed from one component to another. <br />
                    2. It is Immutable (cannot be modified). <br />
                    3. Props can be used with state and functional components. <br />
                    4. Props are read-only. <br />
                    <br />
                    <b>State: <br /></b>
                    1. The Data is passed within the component only. <br />
                    2. It is Mutable ( can be modified). <br />
                    3. State can be used only with the state components/class component (Before 16.0). <br />
                    4. State is both read and write.</p>

            </div>
            <div className='third-q'>
                <h2> Q3. What are the uses of useEffect in ReactJS except from loading data?</h2>
                <p>The useEffect Hook allows us to perform side effects in components.Some examples of side effects are: fetching data, directly updating the DOM, and timers. The useEffect hook allows us to respond to changes in the component lifecycle. The component lifecycle refers to a set of events that occur from the time, a component is mounted to the DOM until it is removed. useEffect is most commonly used to execute code when the component is initially rendered, when it is updated, and when it is unmounted.The useEffect hook allows components to react to lifecycle events such as mounting to the DOM, re-rendering, and unmounting.Using useEffect is probably the best part of React Hooks. It helps reduce the clutter of the component lifecycle methods and, most importantly, it helps separate different logic that can appear in the lifecycle methods.</p>

            </div>

        </div>
    );
};

export default Question;