import { useEffect, useState } from "react";
import fromApi from "../api/fromApi";

import Image from "../../components/Image";
import Main from "../../components/Main";
import Container from "../../components/Container";

import {
  Block,
  Card,
  Flex,
  Grid,
  GridItem,
  H3,
  InlineBlock,
  NeoInput,
} from "../../primitives";
import Button from "../../components/Button/Button";

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

  // useEffect(() => {
  //   if (!xValue) return;
  //   fromApi.getPokemonByNameOrId(+xValue).then((res) => {
  //     setPokemon(res);
  //     setFetchedData(true);
  //   });
  // }, [xValue]);

  const _handleChange = (event) => {
    setValue(event.target.value);
  };

  const _searchPokemon = () => {
    fromApi.getPokemonByNameOrId(+xValue).then((res) => {
      setPokemon(res);
      setFetchedData(true);
    });
  };

  return (
    <>
      <Main hideOverflow>
        {/* <Container> */}

        <Grid center>
          <GridItem small="nine-tenths" large="one-third">
            <Block top={5} bottom={5}>
              <Card halfPadding>
                <h5>PokéSearch</h5>
              </Card>
            </Block>
            {pokemon && dataFetched && (
              <Card minHeight="200px">
                <Flex
                  column
                  align="center"
                  justify="space-between"
                  style={{ height: "100%" }}
                >
                  <Image src={pokemon.sprites.front_default} />
                  <div>
                    <H3>{pokemon.name}</H3>
                    <p>#{pokemon.id}</p>
                  </div>
                </Flex>
              </Card>
            )}
            <Block top={5}>
              <form>
                <Flex justify="space-between">
                  <NeoInput
                    type="text"
                    value={xValue}
                    onChange={_handleChange}
                  />
                  <Button onClick={() => _searchPokemon()}>Search</Button>
                </Flex>
              </form>
            </Block>
          </GridItem>
        </Grid>
        {/* </Container> */}
      </Main>
    </>
  );
}

export default Test;
