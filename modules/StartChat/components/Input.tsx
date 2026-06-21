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
						className="select outline-none border-none w-fit rounded-lg small-font"
						suppressHydrationWarning={true}
					>
						<option>{getText('startChat.select.options.first')}</option>
						<option>{getText('startChat.select.options.second')}</option>
						<option>{getText('startChat.select.options.third')}</option>
						<option>{getText('startChat.select.options.fourth')}</option>
					</select>

					<button
						className="btn btn-outline bg-base-100 border-none rounded-lg"
						suppressHydrationWarning={true}
					>
						<RiArrowUpLine size={16} />
					</button>
				</div>
			</div>
		</>
	);
}
