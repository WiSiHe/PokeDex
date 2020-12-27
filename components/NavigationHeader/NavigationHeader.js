import React from "react";
import PropTypes from "prop-types";

import Styles from "./styles";
import FakeLink from "../FakeLink/FakeLink";
import { useRouter } from "next/router";
import { Flex, InlineBlock } from "../../primitives";
import Container from "../Container";

const NavigationHeader = () => {
  const router = useRouter();
  const { route = "" } = router;

  return (
    <Styles.Wrapper>
      <Flex align="center" fullHeight>
        <InlineBlock right={4}>
          <Styles.Link active={route === "/"} onClick={() => router.push("/")}>
            <img src="/images/pokeball_icon.png" alt="home" width="25px" height="25px" />
          </Styles.Link>
        </InlineBlock>
        <InlineBlock>
          <Styles.Link active={route === "/pokedex"} onClick={() => router.push("/pokedex")}>
            Pokedex
          </Styles.Link>
        </InlineBlock>
        <InlineBlock left={4}>
          <Styles.Link active={route === "/pokesearch"} onClick={() => router.push("/pokesearch")}>
            Pokesearch
          </Styles.Link>
        </InlineBlock>
      </Flex>
    </Styles.Wrapper>
  );
};

NavigationHeader.propTypes = {
  hideOverflow: PropTypes.bool,
  children: PropTypes.node,
};

export default NavigationHeader;
