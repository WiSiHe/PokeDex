import React, { useState } from "react";
import Image from "next/image";

import FrameWrapper from "./styles";
import { animated, useSpring } from "react-spring";

const LoadingAnimation = () => {
  const [resetOrbit, setResetOrbit] = useState(false);

  const style = useSpring({
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
    onRest: () => setResetOrbit((state) => !state),
    reset: resetOrbit,
  });

  return (
    <FrameWrapper>
      <animated.div style={style}>
        <img src="/images/pokeball_icon.png" width="100%" height="100%" />
        {/* // <Image src="/images/pikachu.png" width="50px" height="50px" /> */}
      </animated.div>
    </FrameWrapper>
  );
};

export default LoadingAnimation;
