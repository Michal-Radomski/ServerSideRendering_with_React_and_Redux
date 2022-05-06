import {AppProps} from "next/app";

import "../styles/index.scss";

export default function MyApp({Component, pageProps}: AppProps) {
  console.log("Component:", Component);
  console.log("pageProps:", pageProps);

  return <Component {...pageProps} />;
}
