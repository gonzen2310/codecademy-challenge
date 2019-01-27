import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// Import courses data
import Courses from "./courses";

// Import components
import Navbar from "./Components/Navbar/Navbar";
import Title from "./Components/Title/Title";
import Cards from "./Components/Cards/Cards";
import Tags from "./Components/Tags/Tags";

class App extends React.Component {
  state = {
    title: "All courses"
  };

  getTags = courses => {
    let tags = new Map();
    courses.forEach(course => {
      [...course.tags].forEach(tag => {
        tags.set(tag, tags.get(tag) === undefined ? 1 : tags.get(tag) + 1);
      });
    });
    return new Map([...tags].sort());
  };

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="App-wrapper">
          <Title text={this.state.title} />
          <Tags tags={this.getTags(Courses)} />
          <Cards courses={Courses} />
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
