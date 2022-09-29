import React from 'react';
import './Game.css'

const Game = (props) => {

    const { name, img, time } = props.game;
    return (
        <div className='game'>
            <img src={img} alt="" />
            <div className='game-info'>
                <p> {name} </p>
                <p>Time Required: {time} </p>
            </div>
            <button onClick={() => props.handleAddToList(props.game)} className='btn-cart'>
                <p className='btn-text'>Add To list</p>
            </button>


        </div>
    );
};

export default Game;