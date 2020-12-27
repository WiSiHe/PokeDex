import { useEffect, useState } from "react";
import fromApi from "../api/fromApi";
import Image from "next/image";

import Main from "../../components/Main";
import Container from "../../components/Container";

import { Block, Card, Flex, Grid, GridItem, H2, H3, NeoInput } from "../../primitives";
import Button from "../../components/Button/Button";
import { useFormik } from "formik";
import Tag from "../../components/Tag";
import { useRecoilState } from "recoil";
import { pokemon as pokemonAtom } from "../../atoms/pokemon";

function Test() {
  const [pokemon, setPokemon] = useState({});
  const [xValue, setValue] = useState();
  const [dataFetched, setFetchedData] = useState(false);

  const [test, setTest] = useRecoilState(pokemonAtom);

  const {
    name = "",
    id = "",
    weight = "",
    height = "",
    types = [],
    sprites: { other = {} } = {},
  } = pokemon;

  useEffect(() => {
    fromApi.getPokemonByNameOrId(1).then((res) => {
      setPokemon(res);
      setFetchedData(true);
    });
  }, []);

  const _handleChange = (event) => {
    setValue(event.target.value);
  };

  const _searchPokemon = (pokemonNumber) => {
    fromApi
      .getPokemonByNameOrId(pokemonNumber)
      .then((res) => {
        setPokemon(res);
      })
      .catch((err) => alert("no pokemon found"));
  };

  const pokemonImage = other?.["official-artwork"];
  console.log("pokemonImage", pokemonImage);
  // useEffect(() => {
  //   async function getPokemon() {
  //     const resp = await fetch(pokemonUrl);
  //     const body = await resp.json();
  //     setPokemonData(body);
  //   }
  //   getPokemon();
  // }, [pokemonName, pokemonUrl]);

  const formik = useFormik({
    initialValues: {
      pokemonNumber: 1,
    },
    onSubmit: (values) => {
      const { pokemonNumber } = values;
      _searchPokemon(pokemonNumber);
    },
  });

  return (
    <Main hideOverflow>
      <Container>
        <Grid center>
          <GridItem small="nine-tenths" large="one-third">
            <Block top={5} bottom={5}>
              <H2>Pokémon search</H2>
            </Block>
            {pokemon && dataFetched && (
              <Card minHeight="200px">
                <Flex column align="center" justify="space-between" style={{ height: "100%" }}>
                  <Image
                    width="150px"
                    height="150px"
                    src={pokemonImage?.front_default || "/images/722.png"}
                  />
                  <div>
                    <Block bottom={2}>
                      <H3>{name}</H3>
                    </Block>
                    <div style={{ position: "absolute", left: "8px", top: "8px" }}>
                      <p>#{id}</p>
                    </div>
                    <Flex>
                      {types.map((t) => {
                        const { name } = t.type;
                        return (
                          <Block right={2}>
                            <Tag>{name}</Tag>
                          </Block>
                        );
                      })}
                    </Flex>
                    <Block top={2}>
                      <Flex>
                        <p>
                          <b>Weight:</b> {weight}
                        </p>
                        <Block left={2}>
                          <p>
                            <b>Height:</b> {height}
                          </p>
                        </Block>
                      </Flex>
                    </Block>
                  </div>
                </Flex>
              </Card>
            )}
            <Block top={7}>
              <form onSubmit={formik.handleSubmit}>
                <Flex justify="space-between" responsive align="center">
                  <NeoInput
                    onChange={formik.handleChange}
                    name="pokemonNumber"
                    id="pokemonNumber"
                    value={formik.values.pokemonNumber}
                  />
                  <Block topMobile={4}>
                    <Button full type="submit">
                      Search
                    </Button>
                  </Block>
                </Flex>
              </form>
            </Block>
          </GridItem>
        </Grid>
      </Container>
    </Main>
  );
}

export default Test;
