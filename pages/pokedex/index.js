import { useEffect, useState } from "react";

import Main from "../../components/Main";
import { Block, Flex, Grid, GridItem, StickyWrapper } from "../../primitives";
import { isEmptyArray } from "../../utils/isEmptyUtils";
import fromApi from "../api/fromApi";
import PokemonCard from "../../components/PokemonCard";
import GenerationPicker from "../../components/GenerationPicker/GenerationPicker";
import { useRecoilState } from "recoil";
// import { pokemon } from "../../atoms/pokemon";
import { pokemonList as pokemonListAtom } from "../../atoms/pokemonList";

import Container from "../../components/Container";
import Loader from "../../components/Loader";
import Select from "../../components/Select/Select";

function PokeDex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedGeneration, setSelectedGeneration] = useState("1");
  const [fetched, setFetched] = useState(false);

  // const [test, setTest] = useRecoilState(pokemon);
  const [pokeArray, setPokeArray] = useRecoilState(pokemonListAtom);

  useEffect(() => {
    fromApi.getPokemons(151, 0).then((res) => {
      setPokemonList(res.results);
      setPokeArray(res.results);
      setFetched(true);
    });
  }, []);

  useEffect(() => {
    if (selectedGeneration === "1") {
      fromApi.getPokemons(151, 0).then((res) => {
        setPokemonList(res.results);
      });
    } else if (selectedGeneration === "2") {
      fromApi.getPokemons(100, 151).then((res) => {
        setPokemonList(res.results);
      });
    } else if (selectedGeneration === "3") {
      fromApi.getPokemons(135, 251).then((res) => {
        setPokemonList(res.results);
      });
    } else if (selectedGeneration === "4") {
      fromApi.getPokemons(107, 386).then((res) => {
        setPokemonList(res.results);
      });
    } else if (selectedGeneration === "5") {
      fromApi.getPokemons(156, 493).then((res) => {
        setPokemonList(res.results);
      });
    } else if (selectedGeneration === "6") {
      fromApi.getPokemons(72, 649).then((res) => {
        setPokemonList(res.results);
      });
    } else if (selectedGeneration === "7") {
      fromApi.getPokemons(88, 721).then((res) => {
        setPokemonList(res.results);
      });
    } else if (selectedGeneration === "8") {
      fromApi.getPokemons(90, 809).then((res) => {
        setPokemonList(res.results);
      });
    }
  }, [selectedGeneration]);

  const generations = [
    { text: "Gen 1", name: "1", value: "1" },
    { text: "Gen 2", name: "2", value: "2" },
    { text: "Gen 3", name: "3", value: "3" },
    { text: "Gen 4", name: "4", value: "4" },
    { text: "Gen 5", name: "5", value: "5" },
    { text: "Gen 6", name: "6", value: "6" },
    { text: "Gen 7", name: "7", value: "7" },
    { text: "Gen 8", name: "8", value: "8" },
  ];

  if (!fetched) return <Loader isFullPage text="loading" />;

  return (
    <Main hideOverflow>
      <Container>
        <Flex column align="center" justify="center">
          <Block top={4} bottom={4}>
            <h3>Pokédex</h3>
          </Block>
          <Block bottom={5}>
            {/* <GenerationPicker
              selectedGeneration={selectedGeneration}
              selectGeneration={(e) => setSelectedGeneration(e)}
            /> */}
            <Select
              name="generation"
              selected={selectedGeneration}
              options={generations}
              onChange={(e) => setSelectedGeneration(e.target.value)}
            />
          </Block>

          <Grid center full>
            {pokemonList.map((pokemon, i) => {
              const { name, url } = pokemon;

              return (
                <GridItem base="one-half" medium="one-half" large="one-third" key={i}>
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
