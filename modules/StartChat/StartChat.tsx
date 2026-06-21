import Input from './components/Input';
import Title from './components/Title';

export default function StartChat() {
	return (
		<>
			<div className="grid w-full h-dvh place-items-center">
				<div className="grid gap-[20px] place-items-center w-full">
					<Title></Title>
					<Input></Input>
				</div>
			</div>
		</>
	);
}
