import React from "react";

const Button = (props) => {
  return (
    <button className="buttons" onClick={props.onclick}>
      {props.val}
    </button>
  );
};

export default Button;
