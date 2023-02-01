import pokemonTypeColors from '../helpers/pokemonTypeColors';
import React from 'react';
import './style.css';

function Card({ pokemon }) {
    return (
        <div className="Card">
            <div className="Card__img">
                <img src={pokemon.sprites.front_default} alt="" />
            </div>
            <div className="Card__name">
                #{pokemon.id}
                <br></br>
                {pokemon.name}
            </div>
            <div className="Card__types">
                {
                    pokemon.types.map(type => {
                        return (
                            <div className="Card__type" style={{ backgroundColor: pokemonTypeColors[type.type.name] }}>
                                {type.type.name}
                            </div>
                        )
                    })
                }
            </div>
            <div className="Card__info">
                <div className="Card__data">
                    <p className="Card__info">Weight : {pokemon.weight}</p>
                </div>
                <div className="Card__data">
                    <p className="Card__info">Height : {pokemon.height}</p>
                </div>
                <div className="Card__data">
                    <p className="Card__info">Ability : {pokemon.abilities[0].ability.name}</p>
                </div>
            </div>
        </div>
    );
}

export default Card;