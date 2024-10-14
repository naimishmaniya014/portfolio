import React from 'react';  // Add this line
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import ContactLinks from '../components/ContactLinks';
import Footer from '../components/Footer';

import projects from '../data/projects';
import statements from '../data/about-me';

export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="home-container">
        <Navbar />
        <Hero />
        <About statements={statements} />

        {/* Projects Section */}
        <div id="projects">  {/* Ensure the Link target matches this id */}
          <h2 className="section-title">Projects</h2>
          <Projects projects={projects} />
        </div>

        <div className="background" />

        {/* Contact Me Section */}
        <div id="contact">  {/* Ensure consistency with react-scroll */}
          <h2 className="section-title">Contact me!</h2>
          <ContactLinks />
        </div>

        <Footer />
      </div>
    );
  }
}
