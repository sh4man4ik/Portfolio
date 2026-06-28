import getText from '../../../shared/texts/texts';

export default function Title() {
	return (
		<>
			<p className="large-font font-medium">{getText('startChat.title')}</p>
		</>
	);
}
