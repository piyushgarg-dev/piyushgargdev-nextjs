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
      colors: {
        dark: {
          primary: '#000000',
          secondary: '#333333',
        },
        light: {
          primary: '#ffffff',
          secondary: '#dddddd',
        },
      },
    },
  },
  plugins: [],
};
