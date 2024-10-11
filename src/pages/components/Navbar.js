import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    // Check if we are in the browser
    if (typeof window !== 'undefined') {
      setIsBrowser(true);
    }
  }, []);

  return (
    <div className="navbar-container">
      <nav className="navbar">
        {isBrowser && (
          <>
            <Link to="resume" smooth={true} duration={500}>
              Resume
            </Link>
            <Link to="projects" smooth={true} duration={500}>
              Projects
            </Link>
            <Link to="contact" smooth={true} duration={500}>
              Contact
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
