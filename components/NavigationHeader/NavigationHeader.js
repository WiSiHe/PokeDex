import React from "react";
import PropTypes from "prop-types";

import Styles from "./styles";
import FakeLink from "../FakeLink/FakeLink";
import { useRouter } from "next/router";
import { Flex, InlineBlock } from "../../primitives";

const NavigationHeader = () => {
  const router = useRouter();
  return (
    <Styles.Wrapper>
      <Flex justify="center" align="center" fullHeight>
        <InlineBlock right={2}>
          <FakeLink noUnderline onClick={() => router.push("/")}>
            home
          </FakeLink>
        </InlineBlock>
        <InlineBlock>
          <FakeLink noUnderline onClick={() => router.push("/pokedex")}>
            pokedex
          </FakeLink>
        </InlineBlock>
        <InlineBlock left={2}>
          <FakeLink noUnderline onClick={() => router.push("/pokesearch")}>
            pokesearch
          </FakeLink>
        </InlineBlock>
      </Flex>
    </Styles.Wrapper>
  );
};

NavigationHeader.propTypes = {
  hideOverflow: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default NavigationHeader;
