import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function Login({
	className,
	...props
}: React.ComponentPropsWithoutRef<'div'>) {
	return (
		<div className={cn('flex flex-col gap-6', className)} {...props}>
			<Card className="h-[844px] flex flex-col pt-[120px]  gap-6 bg-background w-[383px] rounded-[4px]">
				<CardHeader>
					<CardTitle className="text-2xl">Login</CardTitle>
					<CardDescription>
						Enter your user name below to login to your account
					</CardDescription>
				</CardHeader>
				<CardContent>
					<form>
						<div className="flex flex-col gap-6">
							<div className="grid gap-2">
								<Label htmlFor="username">User name</Label>
								<Input
									id="username"
									type="text"
									placeholder="John Doe"
									required
								/>
							</div>

							<div className="grid gap-2">
								<div className="flex items-center">
									<Label htmlFor="password">Password</Label>
									<a
										href="#"
										className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
									>
										Forgot your password?
									</a>
								</div>
								<Input id="password" type="password" required />
							</div>
						</div>
					</form>
				</CardContent>
				<CardFooter className="gap-2 flex-col">
					<Button type="submit" className="w-full">
						Login
					</Button>
					<Button variant="outline" className="w-full">
						Don&apos;t have an account? Sign up
					</Button>
				</CardFooter>
			</Card>
		</div>
	);
}
