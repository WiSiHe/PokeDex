import { useEffect, useState } from "react";
import Image from "next/image";

import Main from "../../components/Main";
import { Block, Card, Grid, GridItem } from "../../primitives";
import { isEmptyArray } from "../../utils/isEmptyUtils";
import fromApi from "../api/fromApi";

function Test() {
  const [pokemonList, setPokemonList] = useState([]);
  const [xValue, setValue] = useState();

  const [dataFetched, setFetchedData] = useState(false);

  useEffect(() => {
    fromApi.getPokemons(150).then((res) => {
      setPokemonList(res.results);
      setFetchedData(true);
    });
  }, []);

  if (isEmptyArray(pokemonList)) return null;

  //   const getData = (url) => {
  //     const tex = fetch(url)
  //       .then((response) => response.json())
  //       .then((data) => console.log(data))
  //       .catch((error) => console.log(error));
  //     // console.log("tex", tex);

  //     return tex.data;
  //   };
  return (
    <Main hideOverflow>
      <Grid center>
        <GridItem small="nine-tenths" large="one-third">
          <h5>Pokédex</h5>
          {pokemonList.map((pokemon) => {
            const { name, url } = pokemon;
            console.log("pokemon", pokemon);
            let infoData = {};

            const info = fetch(url).then((response) => response.json());
            //   .then((data) => (infoData = data));
            console.log(info, infoData);
            return (
              <Block bottom={3}>
                <Card minHeight="50px">
                  <Image src="/images/722.png" alt="picture of pikachu" width={100} height={100} />

                  <p>{name}</p>
                </Card>
              </Block>
            );
          })}
        </GridItem>
      </Grid>
    </Main>
  );
}

export default Test;
