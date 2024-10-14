// pages/_app.js
import Head from 'next/head';
import '../styles/index.scss';
import '../styles/_About.scss';  // Add global styles for About here
import '../styles/_Contact.scss';
import '../styles/_Footer.scss';
import '../styles/_Hero.scss';
import '../styles/_Navbar.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
