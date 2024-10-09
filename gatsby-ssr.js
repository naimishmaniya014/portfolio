/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
// gatsby-ssr.js

export const onRenderBody = ({ setHtmlAttributes }) => {
    setHtmlAttributes({ lang: "en" });
  };
  