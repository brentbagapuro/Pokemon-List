import React from 'react'
import './navbar.scss';

export default function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar__logo">
                <h1>Pokemon</h1>
            </div>
            <nav>
                <ul>
                    <li><a>Pokedex</a></li>
                    <li><a>Game</a></li>
                </ul>
            </nav>
        </div>
    )
}
