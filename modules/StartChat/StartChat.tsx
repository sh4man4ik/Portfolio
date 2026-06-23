import Blur from '../../components/Blur';
import Input from './components/Input';
import SplitText from 'gsap/SplitText';
import Title from './components/Title';
import getText from '../../shared/texts/texts';
import gsap from 'gsap';
import parse from 'html-react-parser';
import request from './helpers/request';
import textGsap from './animations/textGsap';
import titleInputGsap from './animations/titleInputGsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { useState } from 'react';

export default function StartChat() {
	const containerRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLDivElement>(null);
	const textRef = useRef<HTMLDivElement>(null);

	let [isHidden, setIsHidden] = useState(false);
	let [inputValue, setInputValue] = useState('');
	let [textValue, setTextValue] = useState<string[]>([]);
	let [selectValue, setSelectValue] = useState(getText('startChat.select.options.first'));

	let [canAsk, setCanAsk] = useState(true);

	useGSAP(() => {
		textGsap(gsap, SplitText, isHidden, textValue, textRef);
	}, [textValue]);

	useGSAP(() => {
		titleInputGsap(gsap, isHidden, titleRef, inputRef);
	}, [isHidden]);

	let handleClick = async () => {
		setIsHidden(true);

		if (inputValue && canAsk) {
			console.log('Question asked!');

			setCanAsk(false);

			const firstOption = getText('startChat.select.options.first');
			const aboutMeContext = getText('portfolio.aboutMe');

			const secondOption = getText('startChat.select.options.second');
			const skillsContext = getText('portfolio.skills');

			const thirdOption = getText('startChat.select.options.third');
			const educationContext = getText('portfolio.education');

			const fourthOption = getText('startChat.select.options.fourth');
			const contactMeContext = getText('portfolio.contactMe');

			const allContext =
				aboutMeContext +
				'<br><br>' +
				skillsContext +
				'<br><br>' +
				educationContext +
				'<br><br>' +
				contactMeContext;

			switch (selectValue) {
				case firstOption:
					await request(inputValue, setInputValue, setTextValue, aboutMeContext);
					break;
				case secondOption:
					await request(inputValue, setInputValue, setTextValue, skillsContext);
					break;
				case thirdOption:
					await request(inputValue, setInputValue, setTextValue, educationContext);
					break;
				case fourthOption:
					await request(inputValue, setInputValue, setTextValue, contactMeContext);
					break;
				default:
					await request(inputValue, setInputValue, setTextValue, allContext);
					break;
			}

			setCanAsk(true);
		}
	};

	return (
		<>
			<div ref={containerRef}>
				<div className="grid h-dvh place-items-center w-full">
					<div
						className={`${isHidden ? 'visible' : 'invisible'} medium-font break-word max-w-[600px] w-[90%] pt-[20px] pb-[140px] absolute top-[0px] left-1/2 -translate-x-1/2`}
					>
						<div>
							{textValue.map((text, i) => (
								<div
									key={i}
									ref={textRef}
									className="bg-base-200 rounded-lg pt-[10px] pb-[10px] pl-[15px] pr-[15px] mb-[20px] whitespace-pre-wrap"
								>
									{parse(text)}
								</div>
							))}
						</div>
					</div>
					<div className="grid gap-[30px] place-items-center w-full">
						<div ref={titleRef} className="block">
							<Blur></Blur>
							<Title></Title>
						</div>

						<div ref={inputRef} className="grid place-items-center w-full">
							<Input
								setSelectValue={setSelectValue}
								inputValue={inputValue}
								setInputValue={setInputValue}
								handleClick={handleClick}
							></Input>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
