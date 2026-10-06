import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";

import Layout from "../components/Layout/Layout";

import "../styles/external.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
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
              <Script id="microsoft-clarity" strategy="afterInteractive">
                {`(function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "fovtfnoy8f");`}
              </Script>
            </>
          )}
          <Component {...pageProps} />
          <Analytics />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  );
}

export default MyApp;
