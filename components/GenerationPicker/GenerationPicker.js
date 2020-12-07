import React from "react";
import PropTypes from "prop-types";

import Styles from "./styles";
import FakeLink from "../FakeLink/FakeLink";
import { useRouter } from "next/router";
import { Block, Flex, Grid, GridItem, InlineBlock } from "../../primitives";
import Button from "../Button/Button";

const GenerationPicker = () => {
  const router = useRouter();
  const { route = "" } = router;

  return (
    <>
      <Flex>
        <Block right={4}>
          <Button>Gen 1</Button>
        </Block>
        <Block right={4}>
          <Button>Gen 2</Button>
        </Block>
        <Block right={4}>
          <Button>Gen 3</Button>
        </Block>
        <Button>Gen 4</Button>
      </Flex>
    </>
  );
};

GenerationPicker.propTypes = {
  hideOverflow: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default GenerationPicker;
