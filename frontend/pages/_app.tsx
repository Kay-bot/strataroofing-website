import '../scss/global.scss';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Strata Roofing</title>
        <link rel="shortcut icon" type="image/x-icon" href="favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </div>
  );
}
