import Blur from '../../components/Blur';
import Input from './components/Input';
import Title from './components/Title';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useRef } from 'react';
import { useState } from 'react';

export default function StartChat() {
	const containerRef = useRef<HTMLDivElement>(null);
	const titleRef = useRef<HTMLDivElement>(null);
	const inputRef = useRef<HTMLDivElement>(null);

	let [isHidden, setIsHidden] = useState(false);

	useGSAP(() => {
		if (isHidden && titleRef.current && inputRef.current) {
			gsap.to(titleRef.current, {
				opacity: 0,
				duration: 0.1
			});

			gsap.to(inputRef.current, {
				y: window.innerHeight - inputRef.current.getBoundingClientRect().bottom - 20,
				duration: 0.4,
				ease: 'back.in'
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
