import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Image from "next/image";

import { Block, Card, Flex, H3 } from "../../primitives";

import Styles from "./styles";
import { isEmptyObject } from "../../utils/isEmptyUtils";
import Tag from "../Tag";

const PokemonCard = ({ pokemonName, pokemonUrl }) => {
  const [pokemonData, setPokemonData] = useState({});

  useEffect(() => {
    const fetchPromise = fetch(pokemonUrl);

    fetchPromise
      .then((response) => {
        return response.json();
      })
      .then((w) => setPokemonData(w));
  }, [pokemonName, pokemonUrl]);

  const {
    id = "",
    name = "",
    height = "",
    weight = "",
    types = [],
    sprites: { front_default = "" } = {},
  } = pokemonData;

  if (isEmptyObject(pokemonData)) return <>null</>;

  return (
    <>
      <Card minHeight="200px">
        <Flex column align="center" justify="space-between" style={{ height: "100%" }}>
          <Image width="150px" height="150px" src={front_default} />
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
    </>
  );
};

PokemonCard.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  pokemonUrl: PropTypes.string.isRequired,
};

export default PokemonCard;
