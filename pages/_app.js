import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";

import Layout from "../components/Layout/Layout";

import "../styles/external.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
              id="google-tag-manager"
              strategy="afterInteractive"
              src="https://www.googletagmanager.com/gtag/js?id=G-0GK7ZH57SK"
            ></Script>
            <Script id="google-analytics" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag()
        {dataLayer.push(arguments)}
        gtag('js', new Date()); gtag('config', 'G-0GK7ZH57SK');
        `}
            </Script>
          </>
        )}
        <Component {...pageProps} />;
        <Analytics />
      </Layout>
    </SessionProvider>
  );
}

export default MyApp;
