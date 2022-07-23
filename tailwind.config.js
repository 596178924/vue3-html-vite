/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
    // 断点
    screens: {
      sm: '500px',
      "sm-max": { max: '500px' },
      "sm-min": { min: '501px' },
      md: '768px',
      "md-max": { max: '768px' },
      "md-min": { min: '769px' },
      lg: '980px',
      "lg-max": { max: '980px' },
      "lg-min": { min: '981px' },
      xl: '1280px',
      "xl-max": { max: '1280px' },
      "xl-min": { min: '1281px' },
      '2xl': '1536px',
      '2xl-max': { max: '1536px' },
      '2xl-min': { min: '1537px' },
      'mxl': '1920px',
    }
  },
  variants: {
    extend: {},
    scrollbar: ['dark']
  },
  // corePlugins: {
  //   preflight: false,
  // },
  plugins: [
    function ({ addBase }) {
      addBase({
        ".el-button": {
          "background-color": "var(--el-button-bg-color,val(--el-color-white))"
        }
      })
    }
  ],
}
