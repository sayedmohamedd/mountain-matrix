// tailwind.config.js
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // لو بتستخدم app router
    './pages/**/*.{js,ts,jsx,tsx}', // لو بتستخدم pages router
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#003049', // أزرق غامق
        // secondary: '#facc15', // أصفر
        // danger: '#dc2626', // أحمر
        // brand: {
        //   light: '#3b82f6',
        //   DEFAULT: '#2563eb',
        //   dark: '#1d4ed8',
        // },
      },
    },
  },
  plugins: [],
};
