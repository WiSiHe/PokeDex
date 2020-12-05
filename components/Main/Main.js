import React from "react";
import PropTypes from "prop-types";

import Styles from "./styles";

const Main = ({ hideOverflow, children }) => {
  return <Styles.Main hideOverflow={hideOverflow}>{children}</Styles.Main>;
};

Main.propTypes = {
  hideOverflow: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Main;
