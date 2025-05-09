// tailwind.config.js
export default {
  darkMode: 'class', // ✅ Enables class-based dark mode toggling
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // <== This line is essential
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
