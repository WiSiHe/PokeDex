import React from "react";
import PropTypes from "prop-types";

import Styles from "./styles";

const Container = ({
  theme,
  maxWidth,
  fillScreenHeight,
  noPaddingMobile,
  showOverflow,
  preventCollapse,
  children,
  ...props
}) => (
  <Styles.Outer
    theme={theme}
    noPaddingMobile={noPaddingMobile}
    showOverflow={showOverflow}
    fillScreenHeight={fillScreenHeight}
    preventCollapse={preventCollapse}
    {...props}
  >
    <Styles.Inner maxWidth={maxWidth}>{children}</Styles.Inner>
  </Styles.Outer>
);

Container.defaultProps = {
  theme: "default",
  maxWidth: "default",
  noPaddingMobile: false,
  fillScreenHeight: false,
  showOverflow: false,
  preventCollapse: false,
};

Container.propTypes = {
  theme: PropTypes.string,
  maxWidth: PropTypes.string,
  noPaddingMobile: PropTypes.bool,
  showOverflow: PropTypes.bool,
  fillScreenHeight: PropTypes.bool,
  preventCollapse: PropTypes.bool,
  children: PropTypes.node.isRequired,
};

export default Container;
