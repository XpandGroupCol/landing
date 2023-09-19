/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        //blanco
        primary: "#FFFFFF",
        //blanco grisaceo
        secondary: "#D9D9D9",
        //fucsia
        third: "#E62057",
        //morado
        fourth: "#5F4092",
      },
      backgroundImage: theme => ({
        'gradiente-custom': `linear-gradient(45deg, ${theme('colors.fourth')} 0%, ${theme('colors.third')} 100%)`,
      }),

      fontFamily: {
        ceraBold: "'Cera Bold', serif",
      
        helvetica: "'Helvetica', serif",
        ceraLight: "'Cera Light', serif",
      },
      lineHeight: {
        70: "70px",
        33: "33px",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};
