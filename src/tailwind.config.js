export default {
  mode: 'jit',
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
    './src2/**/*.{vue,js,ts,jsx,tsx}',  // Add this if your Vue files are in src2
  ],

  theme: {
    extend: {},
  },
  plugins: [],
};