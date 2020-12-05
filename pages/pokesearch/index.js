import { useEffect, useState } from "react";
import fromApi from "../api/fromApi";
import Image from "next/image";
// import Image from "../../components/Image";
import Main from "../../components/Main";
import Container from "../../components/Container";

import { Block, Card, Flex, Grid, GridItem, H2, H3, InlineBlock, NeoInput } from "../../primitives";
import Button from "../../components/Button/Button";
import { useFormik } from "formik";
import Tag from "../../components/Tag";

function Test() {
  const [pokemon, setPokemon] = useState({});
  const [xValue, setValue] = useState();
  const [dataFetched, setFetchedData] = useState(false);

  const { name = "", id = "", weight = "", height = "", types = [] } = pokemon;
  console.log("pokemon", pokemon);

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
    console.log(pokemonNumber);
    fromApi
      .getPokemonByNameOrId(+pokemonNumber)
      .then((res) => {
        setPokemon(res);
      })
      .catch((err) => alert("no pokemon found"));
  };

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
      <Grid center>
        <GridItem small="nine-tenths" large="one-third">
          <Block top={5} bottom={5}>
            <H2>Pokémon search</H2>
          </Block>
          {pokemon && dataFetched && (
            <Card minHeight="200px">
              <Flex column align="center" justify="space-between" style={{ height: "100%" }}>
                <Image width="150px" height="150px" src={pokemon.sprites.front_default} />
                <div>
                  <H3>{name}</H3>
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
                </div>
              </Flex>
            </Card>
          )}
          <Block top={7}>
            <form onSubmit={formik.handleSubmit}>
              <Flex justify="space-between">
                <NeoInput
                  type="number"
                  onChange={formik.handleChange}
                  name="pokemonNumber"
                  id="pokemonNumber"
                  value={formik.values.pokemonNumber}
                />
                <Button type="submit">Search</Button>
              </Flex>
            </form>
          </Block>
          <Block top={4}>
            <p>Wanna see them all in a lazy loading list? check out the pokedex!</p>
          </Block>
        </GridItem>
      </Grid>
    </Main>
  );
}

export default Test;
