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

  
  toggleShow = () =>{
    this.setState({shows : !this.state.shows} )
  }
// hedhi function bch tbadel shows 


  render() {
    const { person, shows } = this.state;
    return (
      <div>
        <button onClick={this.toggleShow}>toggleShow</button>
        {shows && (
          <div>
            <img src={person.imgSrc} alt="larry" />
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <p>{person.profession}</p>
          </div>
        )}
      </div>
    );
  }
}
export default App;

// render nesta3mlouha wakteli component's state wala props change
// {shows ? 'Hide Profile' : 'Show Profile'}
