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
		aboutMe: `👋 My name is Daniil, and I'm a <strong>Security-Focused Developer</strong>.<br><br>👨‍💻 I have experience with <strong>OOP, SOLID principles, algorithms, CI/CD, web architecture, security engineering, APIs, and computer hardware.</strong><br><br>🤝 I know how to work in a <strong>team</strong> and I always <strong>find compromises</strong>, but I also have <strong>my own opinion</strong> on project tasks. I love coding, enjoy it, and love solving different problems to come up with <strong>actual solutions</strong>.<br><br>💪 Also, I like to learn new things and love to play sports.`,

		skills: `• 🎨 <strong>Frontend:</strong> TypeScript, JavaScript, React, Tailwind CSS, Vite, Vike, Electron<br>• ⚙️ <strong>Backend:</strong> Node.js, Express<br>• ☁️ <strong>Databases:</strong> MongoDB<br>• 🧪 <strong>Testing:</strong> Vitest<br>• 🛠️ <strong>Developer Tools:</strong> Git, Render, Vercel, OpenRouter, Stripe, Auth0, Figma<br>• 🦾 <strong>Systems:</strong> C++, Assembler, CMake<br>• 🛡️ <strong>Security Tools:</strong> Ghidra, x64dbg, Oracle VirtualBox<br>• 🌍 <strong>Languages:</strong> English (A2), Russian (C2), Estonian (B2)`,

		education: `🎓 <strong>Jõhvi Upper Secondary School (Jõhvi Gümnaasium), Jõhvi, Estonia</strong><br>📅 <em>September 2024 – Present</em><br>📖 Currently studying in upper secondary school with a focus on IT education.<br><br>🎓 <strong>Sillamäe Estonian Basic School (Sillamäe Eesti Põhikool), Sillamäe, Estonia</strong><br>📅 <em>September 2015 – June 2024</em><br>📖 Completed 9-year basic education program in accordance with the Estonian national curriculum.`,

		contactMe: `You can reach out to me via:<br>• 📧 <a href="mailto:daniil.ignatjev@gmail.com" target="_blank" rel="noreferrer"><u>Email</u></a><br>• ✈️ <a href="https://t.me/sh4man4ikk" target="_blank" rel="noreferrer"><u>Telegram</u></a><br>• 💬 <a href="https://discord.com/users/1263492247681237012" target="_blank" rel="noreferrer"><u>Discord</u></a><br>• 💼 <a href="https://www.linkedin.com/in/daniil-i-64b118314" target="_blank" rel="noreferrer"><u>LinkedIn</u></a><br>• 🐈‍⬛ <a href="https://github.com/sh4man4ik" target="_blank" rel="noreferrer"><u>GitHub</u></a>`
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
