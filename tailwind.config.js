/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,jsx,ts,tsx}",
		"./components/**/*.{js,jsx,ts,tsx}",
		"./node_modules/tw-elements/dist/js/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				inter: ["Inter"],
				fredoka: ["Fredoka"],
			},
		},
	},
	plugins: [require("tw-elements/dist/plugin")],
	important: true,
};
