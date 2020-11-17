import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from './../../fetch/pokemon';
import Search from "./../Search";
import Card from "./../Card/Card";
import Pagination from "./../Pagination";
import './pokedex.scss';

export default function Pokedex() {
  const [pokemonData, setPokemonData] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/pokemon"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    async function fetchData() {
      let response = await getAllPokemon(currentPageUrl);
      setNextPageUrl(response.next);
      setPrevPageUrl(response.previous);
      await loadingPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [currentPageUrl]);

  const loadingPokemon = async data => {
    let _pokemonData = await Promise.all(data.map(async p => {
      let pokemonRecord = await getPokemon(p.url);
      return pokemonRecord
    }));

    setPokemonData(_pokemonData);
  }

  function gotoNextPage() {
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage() {
    setCurrentPageUrl(prevPageUrl);
  }

  return (
      <div className="Pokedex">
      {
        loading ? <h1>Loading...</h1> : (
          <>
            {/*<Search />*/}
            <Card pokemon={pokemonData} />
            <Pagination
              gotoNextPage={nextPageUrl ? gotoNextPage : null}
              gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
            />
          </>
        )
      }
    </div>
  )
}
