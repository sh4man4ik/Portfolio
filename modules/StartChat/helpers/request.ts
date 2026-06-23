import getAnswer from '../api/getAnswer';
import getText from '../../../shared/texts/texts';

export default async function request(inputValue: any, setInputValue: any, setTextValue: any, context: string) {
	setInputValue('');

	let message = String(
		getText('instructions') + '\n\n### USER QUESTION:\n' + inputValue + '\n\n### CONTEXT:\n' + context
	);

	let response = await getAnswer(message);
	setTextValue((previous: any) => [...previous, String(response)]);
}
