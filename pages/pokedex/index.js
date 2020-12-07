import { useEffect, useState } from "react";
import Image from "next/image";

import Main from "../../components/Main";
import { Block, Card, Grid, GridItem } from "../../primitives";
import { isEmptyArray } from "../../utils/isEmptyUtils";
import fromApi from "../api/fromApi";
import PokemonCard from "../../components/PokemonCard";

function Test() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fromApi.getPokemons(151).then((res) => {
      setPokemonList(res.results);
    });
  }, []);

  if (isEmptyArray(pokemonList)) return null;

  return (
    <Main hideOverflow>
      <Grid center>
        <GridItem small="nine-tenths" large="one-third">
          <h5>Pokédex</h5>
          {pokemonList.map((pokemon) => {
            const { name, url } = pokemon;

            return (
              <Block bottom={7}>
                <PokemonCard pokemonName={name} pokemonUrl={url} />
              </Block>
            );
          })}
        </GridItem>
      </Grid>
    </Main>
  );
}

export default Test;
