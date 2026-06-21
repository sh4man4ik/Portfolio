import Blur from '../../components/Blur';
import Input from './components/Input';
import { SplitText } from 'gsap/SplitText';
import Title from './components/Title';
import getText from '../../shared/texts/texts';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { useState } from 'react';

export default function StartChat() {
	const containerRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLDivElement>(null);

	let [isHidden, setIsHidden] = useState(false);

	let [textValue, setTextValue] = useState(null);

	useGSAP(() => {
		setTextValue(getText('portfolio.aboutMe'));

		if (isHidden && titleRef.current && inputRef.current) {
			let split = SplitText.create('.gsap-text', { type: 'lines' });

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
			gsap.from(split.lines, {
				opacity: 0,
				duration: 0.7,
				ease: 'sine.in',
				stagger: 0.1
			});
		}
	}, [isHidden]);

	let handleClick = () => {
		setIsHidden(true);
	};

	return (
		<>
			<div ref={containerRef}>
				<div className="grid h-dvh place-items-center w-full">
					<div
						className={`${isHidden ? 'visible' : 'hidden'} gsap-text re medium-font p-[15px] break-all max-w-[500px] w-[86%] mt-[20px] pb-[160px] absolute top-[0px] left-1/2 -translate-x-1/2`}
					>
						<div>{textValue}</div>
					</div>
					<div className="grid gap-[30px] place-items-center w-full">
						<div ref={titleRef} className="block">
							<Blur></Blur>
							<Title></Title>
						</div>

						<div ref={inputRef} className="place-items-center w-full">
							<Input handleClick={handleClick}></Input>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
