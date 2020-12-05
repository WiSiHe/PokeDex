import { useEffect, useState } from "react";
import Container from "../../components/Container";
import Main from "../../components/Main";
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
      <Container>
        <h5>Pokédex</h5>
        {pokemonList.slice(0, 5).map((pokemon) => {
          const { name, url } = pokemon;
          let infoData = {};

          const info = fetch(url).then((response) => response.json());
          //   .then((data) => (infoData = data));
          console.log(info, infoData);
          return (
            <>
              <p>{name}</p>
            </>
          );
        })}
      </Container>
    </Main>
  );
}

export default Test;
