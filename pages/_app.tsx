import { AppProps } from "next/app";
import Layout from "@components/Layout/Layout";

import "semantic-ui-css/semantic.min.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
