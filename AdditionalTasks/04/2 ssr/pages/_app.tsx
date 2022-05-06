import React from "react";
import "../styles/index.scss";

export default function MyApp({
  Component,
  pageProps,
}: {
  Component: typeof React.Component;
  pageProps: typeof Object;
}): JSX.Element {
  console.log("Component:", Component);
  console.log("pageProps:", pageProps);

  return <Component {...pageProps} />;
}
