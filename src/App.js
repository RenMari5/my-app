import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: { firstName: "Ren", lastName: "Paczkowski" },
      company: "MAI",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, I'm {this.state.name.firstName} {this.state.name.lastName}! I
            work at {this.state.company}!
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firstName: "Bob", lastName: "Smith" },
                  };
                },
                () => {
                  console.log(this.state);
                }
                // the preferred way to write things, easier to understand and follow for someone else looking at the code
              );
            }}
          >
            Change name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
