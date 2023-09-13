/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			size:{
				'base': '18px'
			},
			backgroundImage: {
				'image-banner': "url('./public/fondo.banner.svg')"},
			colors: {
				primary: '#FFFFFF',
				secondary: '#D9D9D9'
			},
			fontFamily: {
				// 'ceraBold': ['Cera Bold', 'sans-serif'],
				//'ceraLight': ['Cera Light', 'sans-serif'],
				ceraBold: "'Cera Bold', serif",
				ceraNormal: "'Cera Normal', serif",
				helvetica: "'Helvetica', serif",
				ceraThin:"'Cera Thin',serif",
				ceraLight:"'Cera Light', serif"
			},
			screens: {
				xs: '450px'
			}
		},
	},
	plugins: [],
}
