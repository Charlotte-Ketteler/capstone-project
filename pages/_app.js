import GlobalStyle from "@/styles";
import Head from "next/head";
import Layout from "@/components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Capstone Project</title>
      </Head>
      <Layout>
      <Component {...pageProps} />
      </Layout>
    </>
  );
}
