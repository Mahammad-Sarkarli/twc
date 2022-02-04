// @ts-nocheck
import React, { useState } from "react";
import whiteArrow from "./svg/arrow-white.svg";
import blackArrow from "./svg/arrow-black.svg";

const RoundedButton = ({ positioned, color }) => {
  const [animation1, setAnimation] = useState("");
  const [animation2, setAnimation2] = useState("");

  const enableAnimation = () => {
    setAnimation("animated-css-able-1");
    setAnimation2("animated-css-able-2");
  };

  const disableAnimation = () => {
    setAnimation("");
    setAnimation2("");
  };

  return (
    <button
      className='rounded relative'
      style={{ top: positioned, borderColor: color }}
      onMouseEnter={enableAnimation}
      onMouseLeave={disableAnimation}
    >
      <img
        src={color === "#17171766" ? blackArrow : whiteArrow}
        alt='rounded button inside arrow right icon'
        className={`opacity-1 ${animation1}`}
      />

      <img
        src={color === "#17171766" ? blackArrow : whiteArrow}
        alt='rounded button inside arrow right icon'
        className={`opacity-0 ${animation2}`}
        style={{ top: positioned }}
      />
    </button>
  );
};

export default RoundedButton;
