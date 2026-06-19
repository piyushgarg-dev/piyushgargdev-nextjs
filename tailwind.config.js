/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
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
        'site-theme': 'var(--site-theme-color)',
        'bg-color': 'var(--bg-color)',
        'text-color': 'var(--text-color)',
        'text-muted': 'var(--text-muted)',
        'border-color': 'var(--border-color)',
        'card-bg': 'var(--card-bg)',
      }
    },
  },
  plugins: [],
};
