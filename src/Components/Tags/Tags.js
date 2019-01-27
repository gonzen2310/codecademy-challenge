import React from "react";

import "./Tags.css";

const Tags = ({ tags }) => {
  const handleClick = e => {
    const selected = document.querySelector(".tag-component.selected");
    if (selected) {
      selected.classList.remove("selected");
      e.target.classList.add("selected");
    } else {
      e.target.classList.add("selected");
    }
  };

  const keys = [...tags.keys()];

  const tagsList = keys.map((tag, idx) => {
    return (
      <div onClick={handleClick} className={"tag-component"} key={idx}>
        <p>
          {tag} <span>{tags.get(tag)}</span>
        </p>
      </div>
    );
  });

  return <div className={"tag-list-component"}>{tagsList}</div>;
};

export default Tags;
