'use client';
import { useEffect, useState } from 'react';
import { ThemeToggle } from './theme-toggle';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { buttonVariants } from '../ui/button';
import { LucideCommand } from 'lucide-react';

export default function Command() {
	const [open, setOpen] = useState<boolean>(false);

	const handleState = () => setOpen((prev) => !prev);

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				handleState();
			}
		};
		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, []);

	return (
		<Dialog open={open} onOpenChange={handleState}>
			<div className="fixed top-4 left-4">
				<DialogTrigger className={buttonVariants()}>
					Themes / <LucideCommand /> + k
				</DialogTrigger>
			</div>
			<DialogContent>
				<div className="pt-4">
					<ThemeToggle />
				</div>
			</DialogContent>
		</Dialog>
	);
}
