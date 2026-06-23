import getAnswer from '../api/getAnswer';

export default async function request(inputValue: any, setInputValue: any, setTextValue: any, context: string) {
	let requestMessage = inputValue;
	setInputValue('');

	let response = await getAnswer(requestMessage, context);
	setTextValue((previous: any) => [...previous, String(response)]);
}
