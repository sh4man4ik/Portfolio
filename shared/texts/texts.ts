const EN_TEXTS = {
	title: 'Portfolio | sh4man',
	description: "This is sh4man's portfolio in the form of artificial intelligence",
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
			placeholder: 'What would you like to know?'
		},
		select: {
			options: {
				first: 'About Me',
				second: 'Skills',
				third: 'Education',
				fourth: 'Contact Me'
			}
		}
	},
	portfolio: {
		aboutMe: `My name is Daniil, and I'm a Security-Focused Developer.

I have experience with OOP, SOLID principles, algorithms, CI/CD, web architecture, security engineering, APIs, and computer hardware.

I know how to work in a team and I always find compromises, but I also have my own opinion on project tasks.

I love coding, enjoy it, and love solving different problems to come up with actual solutions.

Also, I like to learn new things and love to play sports.`,
		skills: `• Programming Languages: TypeScript, JavaScript
• Backend: Node.js, Express
• Frontend: React, Tailwind CSS, Vite, Vike, Electron
• Databases: MongoDB
• Testing: Vitest
• Developer Tools: Git, Render, Vercel, Stripe, Auth0, Figma
• Systems: C++, Assembler, CMake
• Security Tools: Ghidra, x64dbg, Oracle VirtualBox
• Languages: English (A2), Russian (C2), Estonian (B2)`,
		education: `Jõhvi Upper Secondary School (Jõhvi Gümnaasium), Jõhvi, Estonia
September 2024 – Present
Currently studying in upper secondary school with a focus on IT education.

Sillamäe Estonian Basic School (Sillamäe Eesti Põhikool), Sillamäe, Estonia
September 2015 – June 2024
Completed 9-year basic education program in accordance with the Estonian national curriculum.`,

		contactMe: `You can reach out to me via:
• Email: daniil.ignatjev@gmail.com
• Telegram: https://t.me/sh4man4ikk
• Discord: https://discord.com/users/1263492247681237012
• LinkedIn: https://www.linkedin.com/in/daniil-i-64b118314
• GitHub: https://github.com/sh4man4ik`
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
