import Blur from '../../components/Blur';
import Input from './components/Input';
import Title from './components/Title';
import { useState } from 'react';

export default function StartChat() {
	let [isHidden, setIsHidden] = useState(false);

	let handleClick = () => {
		setIsHidden(true);
	};

	return (
		<>
			<div className={`${isHidden ? 'place-items-end pb-[20px]' : ''} grid h-dvh w-full place-items-center`}>
				<div className="grid gap-[30px] place-items-center w-full">
					<div className={`${isHidden ? 'hidden' : 'block'}`}>
						<Blur></Blur>
						<Title></Title>
					</div>
					<Input handleClick={handleClick}></Input>
				</div>
			</div>
		</>
	);
}
