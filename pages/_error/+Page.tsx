import getText from '../../shared/texts/texts';
import { usePageContext } from 'vike-react/usePageContext';

export default function Page() {
	const { is404 } = usePageContext();

	if (is404) {
		return (
			<>
				<h1>{getText('pageError.notFound.title')}</h1>
				<p>{getText('pageError.notFound.text')}</p>
			</>
		);
	}

	return (
		<>
			<h1>{getText('pageError.other.title')}</h1>
			<p>{getText('pageError.other.text')}</p>
		</>
	);
}
