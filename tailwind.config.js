/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./index.html",
		"./src/**/*.{vue,js}",
	],
	theme: {
		extend: {
			backgroundImage: {
				'main-1': "url('./assets/images/main-bg-1.png')",
				'main-2': "url('./assets/images/main-bg-2.png')",
				'main-3': "url('./assets/images/main-bg-3.png')",
				'additional': "url('./assets/images/additional-pages.png')",
				'authorize': "url('./assets/images/sign-up-pages.png')"
			},

			gradientColorStopPositions: {
				'0.4': 'rgba(244, 244, 244, 0.4)',
				'0.2': 'rgba(244, 244, 244, 0.2)'
			}
		},
	},
	plugins: [],
}

