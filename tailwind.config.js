/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // theme tokens defined as CSS variables in styles/globals.css
      colors: {
        "theme-page": "var(--bg)",
        "theme-card": "var(--card-bg)",
        "theme-muted": "var(--text-muted)",
        "theme-primary": "var(--text-primary)",
      },
    },
  },
  plugins: [],
};
