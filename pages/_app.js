import { useEffect } from "react";
import { Head } from "../components/common";
import "../styles/globals.css";

const Noop = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const Layout = Component.Layout || Noop;

  useEffect(() => {
    const d = document;
    d.body.classList?.remove("loading");
  }, []);

  return (
    <>
      <Head />
      <Layout pageProps={pageProps}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
