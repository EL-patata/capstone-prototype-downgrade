'use client';
import { cn } from '@/lib/utils';
import { useEffect, useState } from 'react';
import { buttonVariants } from '../ui/button';
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog';
import { Label } from '../ui/label';
import { Switch } from '../ui/switch';
import { ThemeToggle } from './theme-toggle';
import { usePathname } from 'next/navigation';

export default function Command() {
	const [open, setOpen] = useState<boolean>(false);

	const [hidden, setHidden] = useState<boolean>(false);

	const handleOpen = () => setOpen((prev) => !prev);

	const handleHide = () => {
		setHidden((prev) => !prev);
	};

	const pathname = usePathname();

	useEffect(() => {
		const down = (e: KeyboardEvent) => {
			if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				handleOpen();
			}

			if (e.key === 'j' && (e.metaKey || e.ctrlKey)) {
				e.preventDefault();
				handleHide();
			}
		};
		document.addEventListener('keydown', down);
		return () => document.removeEventListener('keydown', down);
	}, []);

	if (pathname.split('/').every((e) => e == ''))
		return (
			<Dialog open={open} onOpenChange={handleOpen}>
				<div
					className={cn('fixed bottom-4 left-4 z-[9000]', hidden && 'hidden')}
				>
					<DialogTrigger className={buttonVariants()}>
						Themes / ctrl + k
					</DialogTrigger>
				</div>
				<DialogContent>
					<div className="pt-4">
						<div className="flex items-center gap-2 py-2">
							<Switch onCheckedChange={handleHide} id="hide" checked={hidden} />
							<Label htmlFor="hide" className="flex items-center gap-2">
								Hide button / ctrl + j
							</Label>
						</div>
						<ThemeToggle />
					</div>
				</DialogContent>
			</Dialog>
		);
}
