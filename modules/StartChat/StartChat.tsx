import Blur from '../../components/Blur';
import Input from './components/Input';
import SplitText from 'gsap/SplitText';
import Title from './components/Title';
import getText from '../../shared/texts/texts';
import gsap from 'gsap';
import parse from 'html-react-parser';
import request from './helpers/request';
import textGsap from './animations/textGsap';
import thinkingGsap from './animations/thinkingGsap';
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
	let [selectValue, setSelectValue] = useState(getText('startChat.select.options.overview'));

	let [canAsk, setCanAsk] = useState(true);

	useGSAP(() => {
		textGsap(gsap, SplitText, isHidden, textValue, textRef);
	}, [textValue]);

	useGSAP(() => {
		titleInputGsap(gsap, isHidden, titleRef, inputRef);
	}, [isHidden]);

	useGSAP(() => {
		thinkingGsap();
	}, [canAsk]);

	let handleClick = async () => {
		if (inputValue && canAsk) {
			setIsHidden(true);
			setCanAsk(false);

			inputValue = inputValue.trim();
			setTextValue((previous: any) => [...previous, inputValue]);

			const aboutMeOption = getText('startChat.select.options.aboutMe');
			const aboutMeContext = getText('portfolio.aboutMe');

			const educationOption = getText('startChat.select.options.education');
			const educationContext = getText('portfolio.education');

			const languagesOption = getText('startChat.select.options.languages');
			const languagesContext = getText('portfolio.languages');

			const techStackOption = getText('startChat.select.options.techStack');
			const techStackContext = getText('portfolio.techStack');

			const projectsOption = getText('startChat.select.options.projects');
			const projectsContext = getText('portfolio.projects');

			const contactMeOption = getText('startChat.select.options.contactMe');
			const contactMeContext = getText('portfolio.contactMe');

			const overviewOption = getText('startChat.select.options.overview');
			const overviewContext =
				aboutMeContext +
				'<br><br>' +
				educationContext +
				'<br><br>' +
				languagesContext +
				'<br><br>' +
				techStackContext +
				'<br><br>' +
				projectsContext +
				'<br><br>' +
				contactMeContext;

			switch (selectValue) {
				case overviewOption:
					await request(inputValue, setInputValue, setTextValue, overviewContext);
					break;
				case aboutMeOption:
					await request(inputValue, setInputValue, setTextValue, aboutMeContext);
					break;
				case educationOption:
					await request(inputValue, setInputValue, setTextValue, educationContext);
					break;
				case languagesOption:
					await request(inputValue, setInputValue, setTextValue, languagesContext);
					break;
				case techStackOption:
					await request(inputValue, setInputValue, setTextValue, techStackContext);
					break;
				case projectsOption:
					await request(inputValue, setInputValue, setTextValue, projectsContext);
					break;
				case contactMeOption:
					await request(inputValue, setInputValue, setTextValue, contactMeContext);
					break;
				default:
					await request(inputValue, setInputValue, setTextValue, overviewContext);
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
									className="bg-base-200 rounded-lg pt-[10px] pb-[10px] pl-[15px] pr-[15px] mb-[20px] whitespace-pre-wrap wrap-anywhere"
								>
									{parse(text)}
								</div>
							))}
						</div>
						<div>
							{!canAsk ? (
								<span className="loading loading-dots loading-lg ml-[15px] mb-[30px]"></span>
							) : (
								<></>
							)}
						</div>
					</div>
					<div className="grid gap-[30px] place-items-center w-full">
						<div ref={titleRef} className="block">
							<Blur></Blur>
							<Title></Title>
						</div>

						<div ref={inputRef} className="grid place-items-center w-full">
							<Input
								inputValue={inputValue}
								setInputValue={setInputValue}
								selectValue={selectValue}
								setSelectValue={setSelectValue}
								handleClick={handleClick}
							></Input>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
