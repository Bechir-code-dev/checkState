import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: "Larry Page",
        bio: "A passionate software developer.",
        imgSrc: 'https://pi.tedcdn.com/r/pe.tedcdn.com/images/ted/59d2866a671de711f6efeebb19b97104a69341f8_254x191.jpg?w=255',
        profession: "Software Engineer",
      },
      shows: false,
      timeSinceMount: 0,
    };
  }
  render(){
    
  }

  
}
export default App;

// render nesta3mlouha wakteli component's state wala props change