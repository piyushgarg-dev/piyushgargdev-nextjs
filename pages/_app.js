import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider, signIn, useSession } from "next-auth/react";

import Layout from "../components/Layout/Layout";
import Script from "next/script";

import "../styles/globals.css";
function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Layout>
        {process.env.NODE_ENV === "production" && (
          <>
            <Script
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
