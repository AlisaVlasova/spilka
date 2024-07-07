const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      'black': '#202020',
      'gray': '#2C2A2F',
      'pink': '#F9D4E4',
      'green': '#88B566',
      'white': '#F5F5F5',
    },
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-unbounded)"],
        mono: ["var(--font-nunito)"],
      },
    },
  },
  plugins: [],
};
export default config;
