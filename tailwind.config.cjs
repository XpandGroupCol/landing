/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#9747FF',
				secondary: '#2D2D2C'
			},
			backgroundImage: {
				'image-banner': "url('/fondo.banner.svg')"},
			fontFamily: {
				ceraBold: "'Cera Bold', serif",
				ceraNormal: "'Cera Normal', serif",
				helvetica: "'Helvetica', serif",
			},
			screens: {
				xs: '450px'
			}
		},
	},
	plugins: [],
}
