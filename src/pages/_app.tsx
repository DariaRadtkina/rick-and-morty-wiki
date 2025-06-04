import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "@/components/Layout";
import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect } from "react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
}
