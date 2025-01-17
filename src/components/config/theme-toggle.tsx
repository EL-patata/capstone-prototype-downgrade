'use client';

import { Check, Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';
import { Button } from '../ui/button';

export function ThemeToggle() {
	const { theme, setTheme } = useTheme();

	const themes = [
		{ title: 'Light', theme: 'light', icon: <Sun /> },
		{ title: 'Dark', theme: 'dark', icon: <Moon /> },
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
					{button.icon}
					{button.title}{' '}
					{button.theme === theme ? (
						<Check className="text-emerald-500" />
					) : null}
				</Button>
			))}
		</div>
	);
}
