import { AppProps } from "next/app";
import Layout from "@components/Layout/Layout";
import { AppProvider } from "store/AppProvider";

import "semantic-ui-css/semantic.min.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <AppProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
};

export default MyApp;
