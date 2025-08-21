module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#2563eb', // blue-600
          green: '#22c55e', // green-500
        },
        accent: {
          blue: '#3b82f6', // blue-500
          green: '#4ade80', // green-400
        },
      },
    },
  },
  plugins: [],
};
