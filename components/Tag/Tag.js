import React from "react";
import PropTypes from "prop-types";

import Styles from "./styles";

const Tag = ({ children }) => {
  return <Styles.Wrapper>{children}</Styles.Wrapper>;
};

Tag.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Tag;
