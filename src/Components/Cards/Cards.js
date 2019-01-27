import React from "react";

import "./Cards.css";

const Cards = ({ courses }) => {
  const coursesList = courses.map(course => {
    return (
      <div className={"card-course-component"} key={course.id}>
        <div className={"card-course-component--image"}>
          <img src={course.image} alt="" />
        </div>
        <div className={"card-course-component--text"}>
          <h1>{course.title}</h1>
        </div>
      </div>
    );
  });

  return <div className={"cards-component"}>{coursesList}</div>;
};

export default Cards;
