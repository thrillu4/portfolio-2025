import type { IProjects } from '../types'

export const projects: IProjects[] = [
	{
		type: 'E-COMMERCE',
		title: 'FURNIRO WEB SITE',
		description:
			"Furniture Landing Page the e-Commerce Website, was made by me to master the studied technologies for practical work and consolidation of knowledge. The project was implemented using Vite ( is a build tool that aims to provide a faster and leaner development experience for modern web projects) and supported template react-ts. On the project you can interact with the products (add them to the cart, favorites and compare them), all this are controlled by Redux-toolkit - a predictable state container for apps. The database was made by hand in json file. Dynamic routing in a web app by React Router Dom. For styles i'm using CSS framework such as Tailwind. The design was taken from free template in figma that I found link to layout. Website animated with framer motion - animation library. I took the icons from react-icons - icons library for react apps. The site is adapted to all screen sizes. I will try to add new things to the project whenever possible and how I will learn something cool 👋😉.",
		link: 'https://web-furniro.netlify.app/',
		src: './previews/furn.png',
		techStack: ['REACT', 'TYPESCRIPT', 'REDUX', 'TAILWIND'],
		gitHub: 'https://github.com/thrillu4/furniro',
		logos: [
			'./tech/react.png',
			'./tech/ts.png',
			'./tech/redux.png',
			'./tech/tailwind.png',
		],
		color: '#C7A316',
	},
	{
		type: 'SAAS',
		title: 'TASK MASTER',
		techStack: ['REACT', 'TYPESCRIPT', 'REDUX', 'TAILWIND'],
		description:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae, quidem, suscipit laborum nostrum doloribus sed illo nesciunt repellat, magnam animi quisquam consequatur? Culpa, ipsam. Laboriosam, praesentium. Quasi soluta similique quo.',
		link: 'https://taskmaster-manager.netlify.app/',
		src: './previews/task.png',
		gitHub: 'https://github.com/thrillu4/task-manager',
		logos: [
			'./tech/react.png',
			'./tech/ts.png',
			'./tech/redux.png',
			'./tech/tailwind.png',
		],
		color: '#151E2E',
	},
	{
		type: 'LANDING PAGE',
		title: 'GOD OF WAR: RAGNARÖK',
		techStack: ['JAVA SCRIPT', 'HTML', 'SCSS'],
		description:
			'Fan‑made landing page inspired by God of War Ragnarök, built with vanilla HTML, SCSS and JavaScript.',
		link: 'https://ragnarok-godofwar.netlify.app/',
		src: './previews/god.png',
		gitHub: 'https://github.com/thrillu4/god_of_war',
		logos: ['./tech/js.png', './tech/html.png', './tech/sass.png'],
		color: '#1C2023',
	},
	{
		type: 'MULTI-LANGUAGE LANDING PAGE',
		title: 'LIVE PROJECTS',
		techStack: ['JAVA SCRIPT', 'HTML', 'CSS'],
		description:
			'Multi-language Landing Page with Dark Mode & Live projects. Dark Mode: Automatically adapts to system preferences or manual toggle. Language Switcher: Dynamically switches between English, Russian, and Ukrainian using JSON translation. Particles.js: Beautiful animated background with theme-specific configuration. Lazy Loading Iframes: Improves performance by loading embedded content only when visible.',
		link: 'https://live-project-bythrillu4.netlify.app/',
		src: './previews/live.png',
		gitHub: 'https://github.com/thrillu4/live-project',
		logos: ['./tech/js.png', './tech/html.png', './tech/css.png'],
		color: '#FFBEBE',
	},
]
