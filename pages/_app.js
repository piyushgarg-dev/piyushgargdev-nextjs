import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "remixicon/fonts/remixicon.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Layout from "../components/Layout/Layout";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
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
    </Layout>
  );
}

export default MyApp;
