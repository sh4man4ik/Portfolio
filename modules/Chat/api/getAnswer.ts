import getText from '../../../shared/texts/texts';

export default async function getAnswer(message: string, context: string) {
	const API_KEY = import.meta.env.PUBLIC_ENV__OPENROUTER_API_KEY;

	try {
		let response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${API_KEY}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				model: 'nvidia/nemotron-3-super-120b-a12b:free',
				messages: [
					{
						role: 'user',
						content: message
					}
				],
				reasoning: { enabled: true }
			})
		});

		const result = await response.json();
		response = result.choices[0].message.content;

		return response;
	} catch (error) {
		console.log(error);

		return getText('error') + context;
	}
}
