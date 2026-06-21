import getText from '../../shared/texts/texts';
import { usePageContext } from 'vike-react/usePageContext';

export default function Page() {
	const { is404 } = usePageContext();

	if (is404) {
		return (
			<>
				<div className="grid h-dvh place-items-center">
					<div className="text-center">
						<h1 className="mb-1 large-font">{getText('pageError.notFound.title')}</h1>
						<p className="small-font">{getText('pageError.notFound.text')}</p>
					</div>
				</div>
			</>
		);
	}

	return (
		<>
			<div className="grid h-dvh place-items-center">
				<div className="text-center">
					<h1 className="mb-1 large-font">{getText('pageError.other.title')}</h1>
					<p className="small-font">{getText('pageError.other.text')}</p>
				</div>
			</div>
		</>
	);
}
