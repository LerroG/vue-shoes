/** @type {import('tailwindcss').Config} */
export default {
	content: [],
	purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	darkMode: false,
	theme: {
		extend: {
			gridTemplateColumns: {
				autofit: 'repeat(auto-fit, minmax(250px, 1fr))',
			},
		},
	},
	plugins: [],
};
