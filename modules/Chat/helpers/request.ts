import getAnswer from '../api/getAnswer';
import getText from '../../../shared/texts/chat';

export default async function request(inputValue: any, setInputValue: any, setTextValue: any, context: string) {
	setInputValue('');

	let message = String(
		getText('instructions') + '\n\n### USER QUESTION:\n' + inputValue + '\n\n### CONTEXT:\n' + context
	);

	try {
		let response = String(await getAnswer(message, context));
		setTextValue((previous: any) => [...previous, String(response)]);
	} catch (error) {
		console.log(error);

		setTextValue((previous: any) => [...previous, getText('error')]);
	}
}
