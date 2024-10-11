import React from 'react';
import PropTypes from 'prop-types';

const Html = ({ headComponents, body, postBodyComponents }) => {
  return (
    <html op="news" lang="en">
      <head>
        {headComponents}
        <meta name="referrer" content="origin" />
        <meta charSet="utf-8" />
        <meta name="description" content="Naimish Maniya's Portfolio" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
        <title>Naimish's Portfolio</title>
      </head>
      <body>
        <div id="___gatsby" dangerouslySetInnerHTML={{ __html: body }} />
        {postBodyComponents}
      </body>
    </html>
  );
};

Html.propTypes = {
  headComponents: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  postBodyComponents: PropTypes.node.isRequired,
};

export default Html;
