import './Layout.css';
import './tailwind.css';

import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div>
			<main>{children}</main>
		</div>
	);
}
