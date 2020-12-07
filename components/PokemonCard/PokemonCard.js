import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import Image from "next/image";

import { Block, Card, Flex, H3 } from "../../primitives";

import Styles from "./styles";
import { isEmptyObject } from "../../utils/isEmptyUtils";
import Tag from "../Tag";
import { animated, useSpring } from "react-spring";

const PokemonCard = ({ pokemonName, pokemonUrl }) => {
  const [pokemonData, setPokemonData] = useState({});
  //   const [style, trigger] = useBoop(boopConfig);
  const [isBooped, setIsBooped] = useState(false);

  useEffect(() => {
    const fetchPromise = fetch(pokemonUrl);
    fetchPromise
      .then((response) => {
        return response.json();
      })
      .then((w) => setPokemonData(w));
  }, [pokemonName, pokemonUrl]);

  const x = 0;
  const y = 10;
  const rotation = 0;
  const scale = 1.1;
  const timing = 150;

  const style = useSpring({
    display: "inline-block",
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(0deg)
         scale(1)`,
    config: {
      tension: 300,
      friction: 10,
    },
  });

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
    <animated.span style={style}>
      <Card minHeight="200px" onClick={() => setIsBooped(!isBooped)}>
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
    </animated.span>
  );
};

PokemonCard.propTypes = {
  pokemonName: PropTypes.string.isRequired,
  pokemonUrl: PropTypes.string.isRequired,
};

export default PokemonCard;
