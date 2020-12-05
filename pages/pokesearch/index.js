import { useEffect, useState } from "react";
import fromApi from "../api/fromApi";

import { Card } from "../../primitives";

function Test() {
  const [pokemon, setPokemon] = useState({});
  const [xValue, setValue] = useState();
  const [dataFetched, setFetchedData] = useState(false);

  useEffect(() => {
    fromApi.getPokemonByNameOrId(9).then((res) => {
      setPokemon(res);
      setFetchedData(true);
    });
  }, []);

  useEffect(() => {
    if (!xValue) return;
    fromApi.getPokemonByNameOrId(+xValue).then((res) => {
      setPokemon(res);
      setFetchedData(true);
    });
  }, [xValue]);

  const _handleChange = (event) => {
    setValue(event.target.value);
  };

  const _handleSubmit = (event) => {
    event.preventDefault();
  };

  const imageUrl = "pokemon.sprites.front_default";
  return (
    <div>
      <h5>Pokédex</h5>
      {pokemon && dataFetched && (
        <Card>
          <img src={pokemon.sprites.other.dream_world.front_default} />
          <p>{pokemon.name}</p>
          <p>{pokemon.id}</p>
        </Card>
      )}
      <form onSubmit={_handleSubmit}>
        <label>
          Name:
          <input type="text" value={xValue} onChange={_handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default Test;
