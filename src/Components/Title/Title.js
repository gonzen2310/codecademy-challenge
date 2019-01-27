import React from "react";

import "./Title.css";

const Title = ({ text }) => {
  return (
    <div className={"title-component"}>
      <h1>{text.toUpperCase()}</h1>
    </div>
  );
};

export default Title;
