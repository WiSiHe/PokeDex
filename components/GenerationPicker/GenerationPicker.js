import React, { useState } from "react";
import PropTypes from "prop-types";

import Styles from "./styles";
import FakeLink from "../FakeLink/FakeLink";
import { useRouter } from "next/router";
import { Block, Flex } from "../../primitives";
import Button from "../Button/Button";
import { animated, useSpring } from "react-spring";

const GenerationPicker = ({ selectedGeneration, selectGeneration }) => {
  const x = 0;
  const y = 0;
  const rotation = 0;
  const scale = 1.3;
  const timing = 150;

  const [isBooped, setIsBooped] = useState(false);

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

  const _setActiveGeneration = (generation = "") => {
    setIsBooped(!isBooped);
    selectGeneration(generation);
  };

  return (
    <>
      <Flex>
        <Block right={2}>
          {/* <animated.span style={style}> */}
          <Button active={selectedGeneration === "1"} onClick={() => _setActiveGeneration("1")}>
            Gen 1
          </Button>
          {/* </animated.span> */}
        </Block>
        <Block right={2}>
          {/* <animated.span style={style}> */}
          <Button active={selectedGeneration === "2"} onClick={() => selectGeneration("2")}>
            Gen 2
          </Button>
          {/* </animated.span> */}
        </Block>
        <Block right={2}>
          <Button active={selectedGeneration === "3"} onClick={() => selectGeneration("3")}>
            Gen 3
          </Button>
        </Block>
        <Button active={selectedGeneration === "4"} onClick={() => selectGeneration("4")}>
          Gen 4
        </Button>
      </Flex>
    </>
  );
};

GenerationPicker.propTypes = {
  // children: PropTypes.node.isRequired,
  selectedGeneration: PropTypes.string,
};

export default GenerationPicker;
