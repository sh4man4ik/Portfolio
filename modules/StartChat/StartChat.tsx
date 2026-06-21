import Blur from '../../components/Blur';
import Input from './components/Input';
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
	const textRef = useRef<HTMLDivElement>(null);

	let [isHidden, setIsHidden] = useState(false);
	let [textValue, setTextValue] = useState<string[]>([]);
	let [selectValue, setSelectValue] = useState(getText('startChat.select.options.first'));

	useGSAP(() => {
		if (isHidden && textValue) {
			setTimeout(() => {
				window.scrollTo({ top: document.documentElement.scrollHeight, behavior: 'smooth' });
			}, 100);

			gsap.from(textRef.current, {
				opacity: 0,
				duration: 0.5,
				y: 5,
				ease: 'sine.in'
			});
		}
	}, [textValue]);

	useGSAP(() => {
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
	}, [isHidden]);

	let handleClick = () => {
		switch (selectValue) {
			case getText('startChat.select.options.first'):
				setTextValue((previous) => [...previous, getText('portfolio.aboutMe')]);
				break;
			case getText('startChat.select.options.second'):
				setTextValue((previous) => [...previous, getText('portfolio.skills')]);
				break;
			case getText('startChat.select.options.third'):
				setTextValue((previous) => [...previous, getText('portfolio.education')]);
				break;
			case getText('startChat.select.options.fourth'):
				setTextValue((previous) => [...previous, getText('portfolio.contactMe')]);
				break;
			default:
				setTextValue((previous) => [...previous, getText('portfolio.aboutMe')]);
				break;
		}

		setIsHidden(true);
	};

	return (
		<>
			<div ref={containerRef}>
				<div className="grid h-dvh place-items-center w-full">
					<div
						className={`${isHidden ? 'visible' : 'invisible'} medium-font break-word max-w-[500px] w-[86%] pt-[20px] pb-[140px] absolute top-[0px] left-1/2 -translate-x-1/2`}
					>
						<div>
							{textValue.map((text, i) => (
								<div
									key={i}
									ref={textRef}
									className="bg-base-200 rounded-lg pt-[10px] pb-[10px] pl-[15px] pr-[15px] whitespace-pre-wrap mb-[20px]"
								>
									{text}
								</div>
							))}
						</div>
					</div>
					<div className="grid gap-[30px] place-items-center w-full">
						<div ref={titleRef} className="block">
							<Blur></Blur>
							<Title></Title>
						</div>

						<div ref={inputRef} className="place-items-center w-full">
							<Input setSelectValue={setSelectValue} handleClick={handleClick}></Input>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
