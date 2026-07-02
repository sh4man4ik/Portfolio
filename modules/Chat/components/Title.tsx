import getText from '../../../shared/texts/chat';

export default function Title() {
	return (
		<>
			<p className="large-font font-medium">{getText('startChat.title')}</p>
		</>
	);
}
