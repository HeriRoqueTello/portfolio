import {
	reactIcon,
	astroIcon,
	vueIcon,
	nextjsIcon,
	svelteIcon,
	typescriptIcon,
	tailwindIcon,
	nodeIcon,
	expressIcon,
	trpcIcon,
	prismaIcon,
	mongodbIcon,
	gitIcon,
	vscodeIcon,
} from './icons';

export const navLinks = [
	{
		id: 'about',
		title: 'About',
	},
	{
		id: 'work',
		title: 'Work',
	},
	{
		id: 'contact',
		title: 'Contact',
	},
];

const toolboxFront = [
	{ name: 'React', icon: reactIcon },
	{ name: 'Astro', icon: astroIcon },
	{ name: 'Vue', icon: vueIcon },
	{ name: 'Next.js', icon: nextjsIcon },
	{ name: 'Svelte', icon: svelteIcon },
	{ name: 'Tailwind', icon: tailwindIcon },
];

const toolboxBack = [
	{ name: 'Node.js', icon: nodeIcon },
	{ name: 'Express.js', icon: expressIcon },
	{ name: 'tRPC', icon: trpcIcon },
	{ name: 'Prisma', icon: prismaIcon },
	{ name: 'MongoDB', icon: mongodbIcon },
];
const toolboxGeneral = [
	{ name: 'Git', icon: gitIcon },
	{ name: 'Visual Studio Code', icon: vscodeIcon },
	{ name: 'TypeScript', icon: typescriptIcon },
];

const toolboxFavorite = [
	{ name: 'Astro', icon: astroIcon },
	{ name: 'Next.js', icon: nextjsIcon },
	{ name: 'Tailwind', icon: tailwindIcon },
	{ name: 'TypeScript', icon: typescriptIcon },
	{ name: 'React', icon: reactIcon },
	{ name: 'Vue', icon: vueIcon },
];

const projects = [
	{
		name: 'GuitarLA',
		description: 'Aplicacion de guitarras que consume una api desde Strapi.',
		tags: [
			{
				name: 'Astro',
				color: 'bg-orange-400',
			},
			{
				name: 'tailwind',
				color: 'bg-sky-400',
			},
		],
		date: {
			year: '2023',
			other: 'Mar 12',
		},
		image: 'blob:https://vercel.com/0ae95e21-d1d6-4138-b16a-c777aef563eb',
		urlDemo: 'https://guitarla-astro-ten.vercel.app/',
		urlRepo: 'https://github.com/HeriRoqueTello/guitarla-astro/tree/main',
	},
];

export { toolboxBack, toolboxFront, toolboxFavorite, toolboxGeneral, projects };
