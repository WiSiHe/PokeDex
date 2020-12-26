/* eslint-disable react/display-name */
import PropTypes from "prop-types";
import React from "react";

import Button from "../Button";

const LinkButton = React.forwardRef((props, ref) => {
  const { href = "", target, rel, ...rest } = props;
  return (
    <a ref={ref} href={href} target={target} rel={rel}>
      <Button as="span" {...rest} />
    </a>
  );
});

LinkButton.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
};

export default LinkButton;
