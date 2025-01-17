import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { Bot, Home, MenuIcon, PhoneCall, User } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';

export default function PhoneWrapper({
	children,
	className,
	active = 'home',
}: PropsWithChildren<{
	className?: ClassValue;
	active?: 'home' | 'profile' | 'chat';
}>) {
	return (
		<Card
			className={cn(
				'w-full max-w-sm h-[844px] bg-background relative rounded-[4px]',
				className
			)}
		>
			<CardHeader className="">
				<MenuIcon className="w-16" />
			</CardHeader>
			<CardContent>
				<div className="min-h-[650px]">{children}</div>
			</CardContent>
			<CardFooter className="grid grid-cols-4 py-1.5 px-3 gap-2 bg-accent/80 dark:bg-accent/40 rounded-lg w-[90%] mx-auto">
				<div
					className={cn(
						'rounded-lg  flex flex-col text-muted-foreground  p-2 items-center justify-center',
						active === 'home' && 'text-primary'
					)}
				>
					<Home className="w-12" />
					<p className="text-sm pt-1">Home</p>
				</div>

				<div
					className={cn(
						'rounded-lg  flex flex-col text-muted-foreground   p-2 items-center justify-center',
						active === 'chat' && 'text-primary'
					)}
				>
					<Bot className="w-12" />
					<p className="text-sm pt-1">Chat</p>
				</div>

				<div
					className={cn(
						'rounded-lg  flex flex-col  text-muted-foreground  p-2 items-center justify-center',
						active === 'profile' && 'text-primary'
					)}
				>
					<User className="w-12" />
					<p className="text-sm pt-1">Me</p>
				</div>

				<div className="rounded-lg  flex flex-col  text-gray-100 p-2 items-center justify-center bg-rose-600">
					<PhoneCall className="w-12" />
					<p className="text-sm pt-1">Emergency</p>
				</div>
			</CardFooter>
		</Card>
	);
}
