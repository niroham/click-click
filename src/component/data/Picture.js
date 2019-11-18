import React from "react";

const Picture = props => {
  return (
    <img
      src={props.image}
      alt={props.alt}
      className="img"
      onClick={() => props.handleClick(props.name)}
    />
  );
};

export default Picture;
