/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'uni-blue': '#00A2E1',
        'uni-purple': '#3A5295',
        'uni-grey': '#CED3D8',
        'uni-bg': '#E5E5E5',
        'uni-bg-grey': '#F6FAFD',
      },
      backgroundImage: {
        'banner-img':
          "linear-gradient(to right bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('./src/assets/cover-img.png')",
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        '2md': '0px 4px 20px rgba(0, 0, 0, 0.08)',
      },
      fontFamily: {
        sans: ['Epilogue', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  // eslint-disable-next-line global-require, import/no-extraneous-dependencies
  plugins: [require('@tailwindcss/forms')],
};
