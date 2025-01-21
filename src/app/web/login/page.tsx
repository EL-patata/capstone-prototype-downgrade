import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function Login() {
	return (
		<Card className=" w-[50vw] h-[90vh] bg-gradient-to-r from-background to-card from-[50%] to-[100%] p-4 rounded-lg absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2">
			<CardContent className="  h-full">
				<div className=" h-full gap-4 w-full flex flex-col items-center justify-center">
					<p className="text-5xl font-semibold">Admin portal</p>

					<div className="grid w-full gap-6">
						<div className="flex flex-col gap-2">
							<Label htmlFor="username">User name</Label>
							<Input
								className="w-full"
								id="username"
								type="text"
								placeholder="John Doe"
								required
							/>
						</div>

						<div className="grid gap-2">
							<div className="flex items-center">
								<Label htmlFor="password">Password</Label>
							</div>
							<Input
								className="w-full"
								id="password"
								type="password"
								required
							/>
						</div>
						<Button type="submit" className="w-full">
							Login
						</Button>
					</div>
					{/* </div>
				<div className="hidden lg:flex h-full items-center justify-center">
					<div
						// src="/logo-copy.jpeg"

						className="flex items-center justify-center rounded-xl bg-gradient-to-tr from-primary to-purple-600 w-[337.5px] h-[337.5px]"
					>
						<p className="text-5xl font-semibold">Admin portal</p>
					</div> */}
				</div>
			</CardContent>
		</Card>
	);
}
