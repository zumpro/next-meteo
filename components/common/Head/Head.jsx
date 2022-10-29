import React from "react";
import SEO from "../SEO";

const Head = () => {
  return (
    <SEO>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <link rel="manifest" href="/site.webmanifest" key="site-manifest" />
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />
    </SEO>
  );
};

export default Head;
