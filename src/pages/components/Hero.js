import React from 'react';
import Typewriter from './Typewriter';
import { Link } from 'react-scroll'; // Replacing Scrollchor with Link from react-scroll

class Hero extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="hero-container">
        <Typewriter className="hero-title" text="Naimish Maniya" />
        <div className="hero-description">
          I am a software developer. I'm all about learning by doing and putting my skills to work.
          <br />
          Check out my{' '}
          <Link
            to="projects"        // Target id
            smooth={true}         // Enable smooth scrolling
            duration={500}        // Scroll duration in milliseconds
          >
            projects
          </Link>{' '}
          below.
        </div>
      </div>
    );
  }
}

export default Hero;
