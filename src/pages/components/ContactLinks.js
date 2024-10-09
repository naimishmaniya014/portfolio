import React from 'react';

class ContactLinks extends React.PureComponent {
  render() {
    return (
      <div className="contact-links">
        <span>
          <a rel="noopener" target="_blank" href="mailto:nmaniya@asu.edu">
            nmaniya@asu.edu
          </a>
        </span>
        <span>
          <a
            rel="noopener"
            target="_blank"
            href="https://www.linkedin.com/in/naimishmaniya1402/"
          >
            LinkedIn
          </a>
        </span>
        <span>
          <a rel="noopener" target="_blank" href="https://github.com/naimishmaniya014?tab=repositories">
            github
          </a>
        </span>
      </div>
    );
  }
}

export default ContactLinks;
