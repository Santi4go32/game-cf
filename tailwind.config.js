/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'image': "linear-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0.15)), url('https://img.freepik.com/psd-gratis/renderizado-3d-antecedentes-financieros_23-2151394221.jpg?t=st=1724019883~exp=1724023483~hmac=ccf80703ca6cd925eeaf2d8eb2336e432ca06022adbf906a7b62a780bf5df455&w=1060')",
      },
      backdropBlur: {
        'login-box': '50px',
      },
      backgroundColor: {
        'login-box': 'rgba(255, 255, 255, 0.3)',
      },
    },
  },
  plugins: [],
};
