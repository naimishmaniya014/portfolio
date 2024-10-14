import React from 'react';
// import '../styles/_Footer.scss';

class Footer extends React.PureComponent {
  render() {
    return (
      <div className="footer">
        <span>Made by Naimish Maniya © {new Date().getFullYear()}</span>
      </div>
    );
  }
}

export default Footer;
