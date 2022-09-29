import React, { useEffect, useState } from 'react';
import Details from '../Details/Details';
import Game from '../Game/Game';

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



            </div>
            <div className='details-container'>
                <h2>this is from details</h2>
                <h4>Selected Items: {details.length}</h4>
                <Details details={details}></Details>



            </div>

        </div>
    );
};

export default Games;