/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#9747FF',
				secondary: '#2D2D2C',
				third: '#E62057',
			},
			backgroundImage: {
				'image-banner': "url('/fondo.banner.svg')"},
				
			fontFamily: {
				ceraBold: "'Cera Bold', serif",
				ceraNormal: "'Cera Normal', serif",
				helvetica: "'Helvetica', serif",
				ceraThin:"'Cera Thin',serif",
				ceraLight:"'Cera Light', serif'",
			},
			screens: {
				xs: '450px'
			}
		},
	},
	plugins: [],
}
