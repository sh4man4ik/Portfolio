const EN_TEXTS = {
	title: 'Portfolio',
	pageError: {
		notFound: {
			title: 'Page Not Found',
			text: 'This page could not be found'
		},
		other: {
			title: 'Internal Error',
			text: 'Something went wrong'
		}
	},
	startChat: {
		title: 'How can I help?',
		input: {
			placeholder: 'How can I help you today?'
		},
		select: {
			options: {
				first: 'About Me',
				second: 'Skills',
				third: 'Education',
				fourth: 'Contact Me'
			}
		}
	}
};
/* Here you can add other languages */

function getText(path: string) {
	let language = navigator.language.slice(0, 2);
	let TEXTS: any;

	switch (language) {
		case 'en':
			TEXTS = EN_TEXTS;
			break;
		/* Here you can add other languages */
		default:
			TEXTS = EN_TEXTS;
			break;
	}

	let parts = path.split('.');

	for (let i = 0; i < parts.length; i++) {
		TEXTS = TEXTS[parts[i]];

		if (!TEXTS) {
			break;
		}
	}

	return TEXTS;
}

export default getText;
