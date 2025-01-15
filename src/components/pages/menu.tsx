import { cn } from '@/lib/utils';
import { ClassValue } from 'clsx';
import { Bot, Home, LogOut, Palette, PhoneCall, User, X } from 'lucide-react';
import { PropsWithChildren } from 'react';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Button } from '../ui/button';

export default function Menu({
	className,
}: PropsWithChildren<{ className?: ClassValue }>) {
	return (
		<Card
			className={cn(
				'w-full max-w-sm h-[844px] rounded-[4px] bg-background relative',
				className
			)}
		>
			<CardHeader className="">
				<X className="w-16" />
			</CardHeader>
			<CardContent>
				<div className="min-h-[650px] flex  flex-col gap-2 items-start">
					<Button
						size={'lg'}
						variant={'ghost'}
						className="text-lg font-semibold"
					>
						<Home /> Go to home screen
					</Button>
					<Button
						size={'lg'}
						variant={'ghost'}
						className="text-lg font-semibold"
					>
						<User /> More details about your profile
					</Button>
					<Button
						size={'lg'}
						variant={'ghost'}
						className="text-lg font-semibold"
					>
						<Bot /> Chat with an AI-Powered bot
					</Button>
					<Button
						size={'lg'}
						variant={'ghost'}
						className="text-lg font-semibold"
					>
						<Palette /> Change the theme
					</Button>
					<div className="mt-auto grid gap-2 w-full">
						<Button
							size={'lg'}
							variant={'destructive'}
							className="text-lg font-semibold bg-rose-600  text-start w-full"
						>
							<PhoneCall /> Send emergency to the staff
						</Button>
						<Button
							size={'lg'}
							variant={'default'}
							className="text-lg font-semibold  text-start w-full"
						>
							<LogOut /> Log out from the app
						</Button>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
