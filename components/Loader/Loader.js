import React from "react";
import PropTypes from "prop-types";

import LoadingAnimation from "./LoadingAnimation";
import { Loader, Block } from "../../primitives";

function LoaderContainer(props) {
  const { isFullPage, isWholeScreen } = props;

  return (
    <div key="loading">
      <Loader isFullPage={isFullPage} isWholeScreen={isWholeScreen}>
        <LoadingAnimation />

        {props.text && (
          <Block top={2}>
            <span>{props.text}</span>
          </Block>
        )}
      </Loader>
    </div>
  );
}

LoaderContainer.defaultProps = {
  text: "",
  isFullPage: false,
  isWholeScreen: false,
};

LoaderContainer.propTypes = {
  text: PropTypes.string,
  isFullPage: PropTypes.bool,
  isWholeScreen: PropTypes.bool,
};

export default LoaderContainer;
