import { RiArrowUpLine } from '@remixicon/react';
import getText from '../../../shared/texts/texts';

export default function Input() {
	return (
		<>
			<div className="grid pt-[10px] p-[15px] bg-base-200 rounded-xl gap-[15px] max-w-[500px] w-[80%]">
				<input
					type="text"
					placeholder={getText('startChat.input.placeholder')}
					className="input border-none outline-none bg-transparent medium-font w-full"
					suppressHydrationWarning={true}
				/>
				<div className="flex justify-between">
					<select
						defaultValue={getText('startChat.select.options.first')}
						className="select outline-none border-none w-fit rounded-lg small-font bg-base-300"
						suppressHydrationWarning={true}
					>
						<option>{getText('startChat.select.options.first')}</option>
						<option>{getText('startChat.select.options.second')}</option>
						<option>{getText('startChat.select.options.third')}</option>
						<option>{getText('startChat.select.options.fourth')}</option>
					</select>

					<button className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-base-300 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 border-none">
						<RiArrowUpLine size={16} />
						<div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]">
							<div className="relative h-full w-10 bg-white/20"></div>
						</div>
					</button>
				</div>
			</div>
		</>
	);
}
