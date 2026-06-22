import type { Config } from 'vike/types';
import SplitText from 'gsap/SplitText';
import getText from '../shared/texts/texts';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import vikeReact from 'vike-react/config';

gsap.registerPlugin(useGSAP, SplitText);

// Default config (can be overridden by pages)
// https://vike.dev/config

const config: Config = {
	// https://vike.dev/head-tags
	title: getText('title'),
	description: getText('description'),

	extends: [vikeReact],

	prerender: true,

	// https://vike.dev/server
	server: true
};

export default config;
