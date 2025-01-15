'use client';

import * as React from 'react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

export function ThemeProvider({
	children,
	...props
}: React.ComponentProps<typeof NextThemesProvider>) {
	return (
		<NextThemesProvider
			{...props}
			themes={[
				'zinc',
				'dark-zinc',

				'indigo',
				'dark-indigo',

				'zinc-blue',
				'dark-zinc-blue',

				'slate-blue',
				'dark-slate-blue',
			]}
		>
			{children}
		</NextThemesProvider>
	);
}
