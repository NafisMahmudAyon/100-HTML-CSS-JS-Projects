/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./*.{html,js}"],
	plugins: [],
	theme: {
		extend: {
			keyframes: {
				load: {
					"0%, 100%": { width: "30px", height: "30px" },
					"50%": { width: "20px", height: "20px" },
				},
			},
		},
	},
};


