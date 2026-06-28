export default function titleInputGsap(gsap: any, isHidden: any, titleRef: any, inputRef: any) {
	if (isHidden && titleRef.current && inputRef.current) {
		gsap.to(titleRef.current, {
			opacity: 0,
			duration: 0.1
		});
		gsap.to(inputRef.current, {
			y: window.innerHeight - inputRef.current.getBoundingClientRect().bottom,
			duration: 0.3,
			ease: 'back.in',
			onComplete: () => {
				gsap.set(inputRef.current, {
					position: 'fixed',
					bottom: 0,
					y: 0
				});
			}
		});
	}
}
