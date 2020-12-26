import { useEffect, useState } from "react";
import Image from "next/image";

import Main from "../../components/Main";
import { Block, Card, Flex, Grid, GridItem } from "../../primitives";
import { isEmptyArray } from "../../utils/isEmptyUtils";
import fromApi from "../api/fromApi";
import PokemonCard from "../../components/PokemonCard";
import GenerationPicker from "../../components/GenerationPicker/GenerationPicker";
import { useRecoilState } from "recoil";
// import { pokemon } from "../../atoms/pokemon";
import { pokemonList as pokemonListAtom } from "../../atoms/pokemonList";
import Button from "../../components/Button/Button";
import Container from "../../components/Container";

function PokeDex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedGeneration, setSelectedGeneration] = useState("1");

  // const [test, setTest] = useRecoilState(pokemon);
  const [pokeArray, setPokeArray] = useRecoilState(pokemonListAtom);

  useEffect(() => {
    fromApi.getPokemons(151, 0).then((res) => {
      setPokemonList(res.results);
      setPokeArray(res.results);
    });
  }, []);

  useEffect(() => {
    if (selectedGeneration === "1") {
      fromApi.getPokemons(151, 0).then((res) => {
        setPokemonList(res.results);
      });
    } else if (selectedGeneration === "2") {
      fromApi.getPokemons(234, 151).then((res) => {
        setPokemonList(res.results);
      });
    } else if (selectedGeneration === "3") {
      fromApi.getPokemons(202, 251).then((res) => {
        setPokemonList(res.results);
      });
    } else if (selectedGeneration === "4") {
      fromApi.getPokemons(151, 386).then((res) => {
        setPokemonList(res.results);
      });
    }
  }, [selectedGeneration]);

  if (isEmptyArray(pokemonList)) return null;

  return (
    <Main hideOverflow>
      <Container>
        <Flex column align="center" justify="center">
          <Block top={4} bottom={4}>
            <h3>Pokédex</h3>
          </Block>
          <Block bottom={5}>
            <GenerationPicker
              selectedGeneration={selectedGeneration}
              selectGeneration={(e) => setSelectedGeneration(e)}
            />
          </Block>
          <Grid center full>
            {pokemonList.map((pokemon, i) => {
              const { name, url } = pokemon;

              return (
                <GridItem base="one-whole" medium="one-half" large="one-third" key={i}>
                  <PokemonCard pokemonName={name} pokemonUrl={url} key={name} />
                </GridItem>
              );
            })}
          </Grid>
        </Flex>
      </Container>
    </Main>
  );
}

export default PokeDex;
