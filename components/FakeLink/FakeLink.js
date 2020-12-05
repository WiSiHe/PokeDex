import React, { Children, cloneElement, createElement, isValidElement } from "react";
import PropTypes from "prop-types";

import Styles from "./styles";

const FakeLink = ({ onClick, children, noUnderline, ...props }) => {
  const handleClick = e => {
    e.preventDefault();
    onClick(e);
  };

  return (
    <Styles.Button role="link" type="button" onClick={handleClick} {...props}>
      {Children.map(children, c =>
        cloneElement(isValidElement(c) ? c : createElement("span", {}, c), {
          className: noUnderline ? "link" : "link-with-underline",
        }),
      )}
    </Styles.Button>
  );
};

FakeLink.defaultProps = {
  noUnderline: false,
  onClick: () => {},
};

FakeLink.propTypes = {
  noUnderline: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default FakeLink;
