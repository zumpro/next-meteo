import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop;

  return (
    <Layout pageProps={pageProps}>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
