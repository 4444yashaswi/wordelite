import React from "react";
import "./Key.css";
const Key = (props) => {
  return (
    <button
      className={
        props.value === "Enter" || props.value === "<-" ? "broad-button" : ""
      }
    >
      {props.value}
    </button>
  );
};

export default Key;
