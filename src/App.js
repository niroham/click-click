import React from "react";
import "./App.css";
import Navbar from "./component/Navbar";
import Picture from "./component/data/Picture";
import friends from "./data.json";

class App extends React.Component {
  state = { friends: friends, score: 0, topScore: 0, clicked: [] };
  handleClick = name => {
    if (
      this.state.clicked
        .map(function(e) {
          return e.name;
        })
        .indexOf(name) === -1
    ) {
      let clicked = [...this.state.clicked];
      clicked.push({ name });
      let friends = [...this.state.friends];
      friends.sort(() => Math.random() - 0.5);
      this.setState({
        clicked,
        friends,
        score: this.state.score + 1
      });
    } else {
      alert("its been clicked");
    }
  };

  render() {
    return (
      <div className="App">
        <Navbar score={this.state.score} topScore={this.state.topScore} />
        <header class="header">
          <h1>Click Game!</h1>
          <h2>
            Click on an image to earn points, but don't click on any more than
            once
          </h2>
        </header>
        <div class="content">
          {this.state.friends.map(friend => (
            <Picture
              image={friend.img}
              alt={friend.name}
              name={friend.name}
              clicked={friend.clicked}
              handleClick={this.handleClick}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
