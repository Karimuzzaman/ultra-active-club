import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Game from '../Game/Game';
import Question from '../Question/Question';

import './Games.css'

const Games = () => {
    const [games, setGames] = useState([]);
    const [details, setDetails] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGames(data));
    }, [])

    const handleAddToList = (game) => {
        // console.log(game);
        const newDetails = [...details, game];
        setDetails(newDetails);
    }

    return (
        <div className='games-container'>
            <div className='game-container'>
                {
                    games.map(game => <Game
                        key={game.id}
                        game={game}
                        handleAddToList={handleAddToList}
                    ></Game>
                    )}
                <Question></Question>



            </div>
            <div className='details-container'>
                <Details details={details}></Details>




            </div>

        </div>
    );
};

export default Games;