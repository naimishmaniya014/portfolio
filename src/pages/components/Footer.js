import React from 'react';

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
