import React from 'react'
import './card.scss';
import PokemonList from "../PokemonList/PokemonList";

export default function Card({ pokemon }) {
    return (
        <div className="Card-container">
            <PokemonList pokemon={pokemon} />
        </div>
    )
}
