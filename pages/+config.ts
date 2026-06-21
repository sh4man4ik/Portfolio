import type { Config } from 'vike/types';
import getText from '../shared/texts/texts';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import vikeReact from 'vike-react/config';

gsap.registerPlugin(useGSAP);

// Default config (can be overridden by pages)
// https://vike.dev/config

const config: Config = {
	// https://vike.dev/head-tags
	title: getText('title'),
	description: '',

	extends: [vikeReact],

	prerender: true,

	// https://vike.dev/server
	server: true
};

export default config;
