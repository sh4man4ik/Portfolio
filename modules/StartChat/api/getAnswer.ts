export default async function getAnswer(inputValue: string, context: string) {
	const API_KEY = import.meta.env.PUBLIC_ENV__OPENROUTER_API_KEY;

	let response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${API_KEY}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			model: 'cohere/north-mini-code:free',
			messages: [
				{
					role: 'user',
					content: inputValue + ' Context: ' + context
				}
			],
			reasoning: { enabled: true }
		})
	});

	const result = await response.json();
	response = result.choices[0].message.content;

	return response;
}
