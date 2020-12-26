import React, { useState } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";

const Link = ({ href, as = null, children, onClick = null }) => {
  const [prefetched, setPrefetched] = useState(false);
  const router = useRouter();

  const handleClick = e => {
    if (typeof onClick === "function") onClick();
    if (!prefetched) return;

    e.preventDefault();
    router.push(href, as || href);
  };

  const handlePrefetch = async () => {
    if (prefetched) return;

    try {
      await router.prefetch(href, as);
      setPrefetched(true);
    } catch (error) {
      console.log({ error });
      setPrefetched(false);
    }
  };

  return React.cloneElement(children, {
    href: as || href,
    onClick: handleClick,
    onMouseEnter: handlePrefetch,
  });
};

Link.propTypes = {
  href: PropTypes.string,
  as: PropTypes.string,
  passHref: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
};

export default Link;
