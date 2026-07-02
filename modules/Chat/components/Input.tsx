import { RiArrowUpLine } from '@remixicon/react';
import getText from '../../../shared/texts/chat';
import { useEffect } from 'react';
import { useState } from 'react';

export default function Input(props: any) {
	// Re-Render
	const [, forceUpdate] = useState(0);

	useEffect(() => {
		forceUpdate((n) => n + 1);
	}, []);

	return (
		<>
			<form className="w-full grid place-items-center" onSubmit={(e) => e.preventDefault()}>
				<div className="grid pt-[10px] p-[15px] bg-base-200 rounded-xl gap-[15px] max-w-[500px] w-[80%] mb-[20px] shadow-[0px_-3px_25px_6px_rgba(0,_0,_0,_0.6)]">
					<input
						type="text"
						placeholder={getText('startChat.input.placeholder')}
						className="input border-none outline-none bg-transparent medium-font w-full"
						suppressHydrationWarning={true}
						value={props.inputValue}
						onChange={(event) => props.setInputValue(event.target.value)}
					/>
					<div className="flex justify-end">
						<button
							className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-lg bg-[#8E3E63] px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 border-none"
							suppressHydrationWarning={true}
							onClick={props.handleClick}
						>
							<RiArrowUpLine size={18} />
							<div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
								<div className="relative h-full w-10 bg-white/20"></div>
							</div>
						</button>
					</div>
				</div>
			</form>
		</>
	);
}
