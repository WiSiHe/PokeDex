import { useEffect, useState } from "react";
import fromApi from "../api/fromApi";
import Image from "next/image";
// import Image from "../../components/Image";
import Main from "../../components/Main";
import Container from "../../components/Container";

import { Block, Card, Flex, Grid, GridItem, H3, InlineBlock, NeoInput } from "../../primitives";
import Button from "../../components/Button/Button";
import { useFormik } from "formik";

function Test() {
  const [pokemon, setPokemon] = useState({});
  const [xValue, setValue] = useState();
  const [dataFetched, setFetchedData] = useState(false);

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
            <Card halfPadding>
              <h5>PokéSearch</h5>
            </Card>
          </Block>
          {pokemon && dataFetched && (
            <Card minHeight="200px">
              <Flex column align="center" justify="space-between" style={{ height: "100%" }}>
                <Image width="150px" height="150px" src={pokemon.sprites.front_default} />
                <div>
                  <H3>{pokemon.name}</H3>
                  <p>#{pokemon.id}</p>
                </div>
              </Flex>
            </Card>
          )}
          <Block top={5}>
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
