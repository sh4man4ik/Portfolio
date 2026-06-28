export default function textGsap(gsap: any, SplitText: any, isHidden: any, textValue: any, textRef: any) {
	if (isHidden && textValue) {
		setTimeout(() => {
			window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
		}, 100);

		SplitText.create(textRef.current, {
			type: 'lines, words',
			mask: 'lines',
			autoSplit: true,
			onSplit(self: any) {
				return gsap.from(self.words, {
					opacity: 0,
					duration: 0.3,
					ease: 'sine.in',
					stagger: 0.05,
					onComplete: () => self.revert()
				});
			}
		});
	}
}
