import { Link } from 'react-scroll';
// import '../styles/_Navbar.scss';

const Navbar = () => (
  <div className="navbar-container">
    <nav className="navbar">
    <a href="https://bit.ly/Maniya_Naimish_Resume" target="_blank" rel="noopener noreferrer">Resume</a>
      <Link to="projects" smooth={true} duration={500}>Projects</Link>
      <Link to="contact" smooth={true} duration={500}>Contact</Link>
    </nav>
  </div>
);

export default Navbar;
