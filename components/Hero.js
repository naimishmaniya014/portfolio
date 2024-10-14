import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll'; // Add this import
import Typewriter from './Typewriter';
// import '../styles/_Hero.scss';

const Hero = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // This ensures the code runs only in the browser
    if (typeof window !== "undefined") {
      setIsBrowser(true);
    }
  }, []);

  return (
    <div className="hero-container">
      <Typewriter className="hero-title" text="Naimish Maniya" />
      <div className="hero-description">
        I am a software developer. I'm all about learning by doing and putting my skills to work.
        <br />
        Check out my{' '}
        {isBrowser && (
          <Link
            to="projects"        // Target id
            smooth={true}         // Enable smooth scrolling
            duration={500}        // Scroll duration in milliseconds
          >
            projects
          </Link>
        )}{' '}
        below.
      </div>
    </div>
  );
};

export default Hero;
