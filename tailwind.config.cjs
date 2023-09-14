/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#FFFFFF',
				secondary: '#D9D9D9',
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
