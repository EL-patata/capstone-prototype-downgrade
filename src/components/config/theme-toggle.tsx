'use client';

import { Check } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	const themes = [
		{ title: 'zinc', theme: 'zinc' },
		{ title: 'dark zinc', theme: 'dark-zinc' },

		{ title: 'indigo', theme: 'indigo' },
		{ title: 'dark indigo', theme: 'dark-indigo' },

		{ title: 'blue/zinc', theme: 'zinc-blue' },
		{ title: 'blue/zinc dark', theme: 'dark-zinc-blue' },

		{ title: 'blue/slate', theme: 'slate-blue' },
		{ title: 'blue/slate dark', theme: 'dark-slate-blue' },
	];

	return (
		<div className="grid grid-cols-2 gap-4">
			{themes.map((button) => (
				<Button
					variant={'outline'}
					key={button.theme}
					onClick={() => {
						setTheme((prev) => {
							if (button.theme === prev) return prev;
							else return button.theme;
						});
					}}
				>
					{button.title}{' '}
					{button.theme === theme ? (
						<Check className="text-emerald-500" />
					) : null}
				</Button>
			))}
		</div>
	);
}
