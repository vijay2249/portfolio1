import Head from 'next/head';
import Theme from '../styles/theme';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>V1JA! CN</title>
        <link rel="icon" type="image/png" href="https://avatars.dicebear.com/api/male/vijay.svg" />
      </Head>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}
 
