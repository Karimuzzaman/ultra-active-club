import React, { useEffect, useState } from 'react';
import Game from '../Game/Game';

import './Games.css'

const Games = () => {
    const [games, setGames] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setGames(data));
    }, [])

    return (
        <div className='games-container'>
            <div className='game-container'>
                {
                    games.map(game => <Game
                        key={game.id}
                        game={game}
                    ></Game>
                    )}



            </div>
            <div className='details-container'>
                <h2>this is from details</h2>

            </div>

        </div>
    );
};

export default Games;