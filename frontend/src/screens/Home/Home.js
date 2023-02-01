import React, { useEffect, useState } from "react";
import PokemonThumb from "../../components/Thumb";
import "./Home.css";
import { Form, FormControl, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
//import { Button } from 'react-bootstrap';

const Home = () => {
  const [pokemons, setpokemon] = useState(null);
  const [onepokemon, setonepoke] = useState("");
  const [allPokemons, setAllPokemons] = useState([]);
  const [loadMore, setLoadMore] = useState(
    "https://pokeapi.co/api/v2/pokemon?limit=20"
  );

  const submitHandler = async (e) => {
    e.preventDefault();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemons.toLowerCase()}`);
    const data = await res.json();
    setonepoke(data);
    console.log(onepokemon);
  };

  const getAllPokemons = async () => {
    const res = await fetch(loadMore);
    const data = await res.json();

    setLoadMore(data.next);

    function createPokemonObject(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        setAllPokemons((currentList) => [...currentList, data]);
        await allPokemons.sort((a, b) => a.id - b.id);
      });
    }
    createPokemonObject(data.results);
  };

  useEffect(() => {
    async function apii() {
      await getAllPokemons();
    }
    apii();
  }, []);

  if (pokemons && onepokemon) {
    return (
      <div>
        <div>
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <FormControl
                type="name"
                value={pokemons}
                placeholder="Enter NAME"
                onChange={(e) => setpokemon(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </div>
        <PokemonThumb
          key="0"
          id={onepokemon.id}
          image={onepokemon.sprites.other.dream_world.front_default}
          name={onepokemon.name}
          type={onepokemon.types[0].type.name}
          height={onepokemon.height}
          weight={onepokemon.weight}
          base_experience={onepokemon.base_experience}
        />
      </div>
    );
  }

  return (
    <div className="app-contaner">
      <br></br>
      <div className="loginContainer">
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
            <Form.Label>
              <p>Search by Name:</p>
            </Form.Label>
            <FormControl
              type="name"
              value={pokemons}
              placeholder="Pokemon Name"
              onChange={(e) => setpokemon(e.target.value)}
            />
          </Form.Group>
          <br></br>
          <Button variant="primary" type="submit">
            Search
          </Button>
        </Form>
      </div>
      <h1>Pokemons</h1>
      <div className="pokemon-container">
        <div className="all-container">
          {allPokemons.map((pokemon, index) => (
            <PokemonThumb
              key={index}
              image={pokemon.sprites.other.dream_world.front_default}
              name={pokemon.name}
              type={pokemon.types[0].type.name}
              height={pokemon.height}
              weight={pokemon.weight}
              base_exp={pokemon.base_experience}
            />
          ))}
        </div>
        <button className="load-more" onClick={() => getAllPokemons()}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default Home;
