import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Larry Page",
        bio: "A passionate software developer.",
        imgSrc:
          "https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/59d2866a671de711f6efeebb19b97104a69341f8_254x191.jpg?w=255",
        profession: "Software Engineer",
      },
      shows: false,
      chrono: 0,
    };
  }
  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ chrono: this.state.chrono + 1 });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  toggleShow = () => {
    this.setState({ shows: !this.state.shows });
  };
  // hedhi function bch tbadel shows

  render() {
    const { person, shows , chrono} = this.state;
    return (
      <div class='profiles'>
        <button onClick={this.toggleShow}>{(shows)?("Hide Profile"):("Show Profile")}</button>
        {shows && (
          <div>
            <img src={person.imgSrc} alt="larry" />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
        <p>The page starts on {chrono} seconds</p>
      </div>
    );
  }
}
export default App;

// render nesta3mlouha wakteli component's state wala props change
// {shows ? 'Hide Profile' : 'Show Profile'}
