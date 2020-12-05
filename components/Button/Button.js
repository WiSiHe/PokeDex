import React from "react";
import PropTypes from "prop-types";

import Styles from "./styles";

const Button = ({
  onClick,
  outlined,
  disabled,
  loading,
  small,
  children,
  full,
  fullMobile,
  type,
  label,
  basketCount,
  ...props
}) => {
  const ariaProps = {};

  if (label) {
    ariaProps["aria-label"] = label;
  }

  if (loading) {
    ariaProps["aria-busy"] = true;
    ariaProps["aria-label"] = "laster";
  }

  return (
    <Styles.Button
      type={type}
      full={full}
      fullMobile={fullMobile}
      small={small}
      outlined={outlined}
      faded={disabled}
      disabled={disabled || loading}
      onClick={onClick}
      {...ariaProps}
      {...props}
    >
      {loading && <Styles.Loader />}
      {children}
      {basketCount ? <Styles.Basket>{basketCount}</Styles.Basket> : null}
    </Styles.Button>
  );
};

Button.defaultProps = {
  type: "button",
  label: "",
  basketCount: false,
  outlined: false,
  disabled: false,
  loading: false,
  small: false,
  full: false,
  fullMobile: false,
  onClick: () => {},
};

Button.propTypes = {
  type: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  basketCount: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  outlined: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  small: PropTypes.bool,
  full: PropTypes.bool,
  fullMobile: PropTypes.bool,
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
};

export default Button;
