/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'image-banner': "url('./public/fondo.banner.svg')"},
			colors: {
				primary: '#9747FF',
				secondary: '#2D2D2C'
			},
			fontFamily: {
				ceraBold: "'cera-pro-bold', serif",
				ceraNormal: "'Cera Normal', serif",
				helvetica: "'Helvetica', serif",
				ceraLight: "'cera-pro-light',serif",
				ceraThin:"'cera-pro-thin',serif"
			},
			screens: {
				xs: '450px'
			}
		},
	},
	plugins: [],
}
