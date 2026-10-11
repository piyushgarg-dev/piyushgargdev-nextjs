import { Head, Html, Main, NextScript } from "next/document";

const themeScript = `
  (function () {
    try {
      var storedTheme = localStorage.getItem("piyushgarg-theme");
      var systemTheme = window.matchMedia("(prefers-color-scheme: light)").matches
        ? "light"
        : "dark";
      document.documentElement.dataset.theme =
        storedTheme === "light" || storedTheme === "dark" ? storedTheme : systemTheme;
    } catch (error) {
      document.documentElement.dataset.theme = "dark";
    }
  })();
`;

export default function Document() {
  return (
    <Html>
      <Head />
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
