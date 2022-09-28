import React from 'react';
import './Header.css'
import logo from '../../images/game-controller-icon-game-controller-icon-design-on-white-background-free-vector.jpg'

const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <div>
                <h1>ULTRA-GAMING-CLUB</h1>
                <br />
                <br />
                <h2>Select today's Game</h2>
            </div>



        </div>
    );
};

export default Header;