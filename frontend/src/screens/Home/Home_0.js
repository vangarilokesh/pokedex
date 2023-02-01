import React, { useState, useEffect } from "react";
import { getAllPokemon, getPokemon } from "./services/pokemon";
import Card from "./Card/Card";
import "./Home.css";
// import {useNavigate} from 'react-router-dom';

const Home = () => {
  // const navigate =useNavigate();
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState("");
  const [previousUrl, setPreviousUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const initialUrl = "https://pokeapi.co/api/v2/pokemon";
  const [endPoint, setEndPoint] = useState('')
  const [container,setContainer] =useState([])
  const [finalPoint,setFinalPoint] =useState('')

  useEffect(() => {
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      setNextUrl(response.next);
      setPreviousUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      console.log(pokemon);
      setLoading(false);
    }
    fetchData();
  }, []);

  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  };

  const prev = async () => {
    if (!previousUrl) return;
    setLoading(true);
    let data = await getAllPokemon(previousUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  };

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async (pokemon) => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );

    setPokemonData(_pokemonData);
  };

  // console.log(pokemonData);
  const onChangeHandler=(e)=>{
    setEndPoint(e.target.value)
  }
  const submitHandler=(e)=>{
    e.preventDefault()
    setFinalPoint(endPoint)
  }
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <div>
            <br></br>
            <h1 align="center">List Of Pokemons</h1>
            <hr></hr>
          </div>
          <div>
            <form onSubmit={submitHandler}>
              <input type="text" value={endPoint} onChange={onChangeHandler} />
              <button type="submit">Submit</button>
            </form>
            <div className="element">
              {container.map((item, index) => {
                return (
                  <div key={index} className="element-div">
                    <img src={item.url} alt="item.name" />
                    <p>{item.name}</p>
                    <p>{item.id}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="grid-container">
            {pokemonData.map((pokemon, i) => {
              return <Card key={i} pokemon={pokemon} />;
            })}
          </div>
          <div className="btn">
            <button onClick={prev}>Prev</button>
            <button onClick={next}>Next</button>
          </div>
        </>
      )}
    </>
  );
};

export default Home;
