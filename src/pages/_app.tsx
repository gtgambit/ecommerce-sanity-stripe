import "@/styles/globals.css";

import { Layout } from "../../components";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { StateContext } from "../../context/StateContext";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StateContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}
