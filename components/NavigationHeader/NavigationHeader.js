import React from "react";
import PropTypes from "prop-types";

import Styles from "./styles";
import FakeLink from "../FakeLink/FakeLink";
import { useRouter } from "next/router";
import { Flex, InlineBlock } from "../../primitives";

const NavigationHeader = () => {
  const router = useRouter();
  const { route = "" } = router;

  return (
    <Styles.Wrapper>
      <Flex justify="center" align="center" fullHeight>
        <InlineBlock right={4}>
          <Styles.Link active={route === "/"}>
            <FakeLink noUnderline onClick={() => router.push("/")}>
              home
            </FakeLink>
          </Styles.Link>
        </InlineBlock>
        <InlineBlock>
          <Styles.Link active={route === "/pokedex"}>
            <FakeLink noUnderline onClick={() => router.push("/pokedex")}>
              pokedex
            </FakeLink>
          </Styles.Link>
        </InlineBlock>
        <InlineBlock left={4}>
          <Styles.Link active={route === "/pokesearch"}>
            <FakeLink white noUnderline onClick={() => router.push("/pokesearch")}>
              pokesearch
            </FakeLink>
          </Styles.Link>
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
