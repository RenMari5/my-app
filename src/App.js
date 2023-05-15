import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  // always runs first, initiallizes the state
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  // runs after the render
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  // runs second, dictates what the UI will be
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
