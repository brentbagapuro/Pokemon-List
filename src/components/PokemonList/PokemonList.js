import React, { useState, useLayoutEffect, useEffect } from "react";
import Modal from 'react-modal';
import './pokemodal.scss';

Modal.setAppElement('#root');

export default function PokemonList({ pokemon }) {
  const [pokeData, setPokeData] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [pokeDataLoading, setPokeDataLoading] = useState(true);

  useLayoutEffect(() => {
    const typeColor = () => {
      document.querySelectorAll('.Card__type').forEach(t => {
        if(t.innerHTML === "grass") {
          t.classList.add('grass');
        } else if(t.innerHTML === "poison") {
          t.classList.add('poison');
        } else if(t.innerHTML === "flying") {
          t.classList.add('flying');
        } else if(t.innerHTML === "fire") {
          t.classList.add('fire');
        } else if(t.innerHTML === "water") {
          t.classList.add('water');
        } else if(t.innerHTML === "bug") {
          t.classList.add('bug');
        } else if(t.innerHTML === "normal") {
          t.classList.add('normal');
        } else if(t.innerHTML === "electric") {
          t.classList.add('electric');
        } else if(t.innerHTML === "ground") {
          t.classList.add('ground');
        } else if(t.innerHTML === "fairy") {
          t.classList.add('fairy');
        } else if(t.innerHTML === "fighting") {
          t.classList.add('fighting');
        } else if(t.innerHTML === "psychic") {
          t.classList.add('psychic');
        } else if(t.innerHTML === "steel") {
          t.classList.add('steel');
        } else if(t.innerHTML === "rock") {
          t.classList.add('rock');
        } else if(t.innerHTML === "ice") {
          t.classList.add('ice');
        } else if(t.innerHTML === "ghost") {
          t.classList.add('ghost');
        } else if(t.innerHTML === "dragon") {
          t.classList.add('dragon');
        } else if(t.innerHTML === "dark") {
          t.classList.add('dark');
        }
      })
    }
    typeColor();
  }, []);

  const cardClick = e => {
    setModalIsOpen(true);
    pokemon.map(p => {
      if(p.name === e.target.dataset.pokemon) {
        setPokeData(p);
        setPokeDataLoading(false);
      }
    })
  }

  return (
    <>
      {pokemon.map((p, i) => (
        <div key={i} className="Card" onClick={cardClick} data-pokemon={p.name}>
          {/*console.log(p)*/}
          <img className="Card__img" src={p.sprites.front_default} data-pokemon={p.name} />
          <h1 className="Card__name" data-pokemon={p.name}>{p.name}</h1>
          <div className="Card__types" data-pokemon={p.name}>
            {p.types.map((t, i) => (
              <span key={i} className="Card__type" data-pokemon={p.name}>
                {t.type.name}
              </span>
            ))}
          </div>
        </div>
      ))}

      <Modal isOpen={modalIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <div className="PokeModal">
        {
          pokeDataLoading ? <h1>No Data</h1> : (
            <>
              <div className="PokeModal__pokemon">
                <img className="PokeModal__pokemon__img" src={pokeData.sprites.other[Object.keys(pokeData.sprites.other)[1]].front_default} />
                <h1 className="PokeModal__pokemon__poke-name">{pokeData.name}</h1>
              </div>
              <div className="PokeModal__info">
                <div className="PokeModal__info__bio">

                  <div className="PokeModal__info__bio__categories">
                    <h4 className="PokeModal__headers">Height</h4>
                    <p className="PokeModal__pars">{pokeData.height}</p>
                  </div>

                  <div className="PokeModal__info__bio__categories">
                    <h4 className="PokeModal__headers">Weight</h4>
                    <p className="PokeModal__pars">{pokeData.weight}</p>
                  </div>

                  {/*<div className="PokeModal__info__bio__categories">
                    <h4 className="PokeModal__headers">Type</h4>
                    <div className="Types">{
                      pokeData.types.map((t, i) => (
                        <span key={i} className="Types__type">
                          {t.type.name}
                        </span>
                      ))
                    }
                    </div>
                  </div>*/}

                  <div className="PokeModal__info__bio__categories">
                    <h4 className="PokeModal__headers">Abilities</h4>
                    {pokeData.abilities.map((a, i) => (
                      <p key={i} className="PokeModal__pars">{a.ability.name}</p>
                    ))}
                  </div>

                </div>

                <div className="PokeModal__info__stats">
                  {pokeData.stats.map((s, i) => (
                    <div key={i} className="PokeModal__info__stats__stat">
                      <h4>{s.stat.name}:</h4>
                      <p>{s.base_stat}</p>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )
        }
        </div>
      </Modal>
    </>
  );
}
