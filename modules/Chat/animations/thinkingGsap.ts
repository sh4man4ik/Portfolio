export default function thinkingGsap() {
	setTimeout(() => {
		window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
	}, 100);
}
