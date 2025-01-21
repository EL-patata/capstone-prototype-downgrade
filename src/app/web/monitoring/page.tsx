'use client';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '@/components/ui/select';
import { Check, User2 } from 'lucide-react';

export default function Page() {
	return (
		<Card className="bg-background min-h-[90vh]">
			<CardHeader>
				<CardTitle>Monitoring users</CardTitle>
			</CardHeader>
			<CardContent className="grid lg:grid-cols-2 gap-3">
				<Card className="bg-gradient-to-r from-card/50 to-background/50 ">
					<CardHeader>
						<CardTitle>Emergency staff</CardTitle>
						<div className="flex items-center justify-between gap-4">
							<Input
								className="basis-1/2 bg-background "
								placeholder="Search for member"
							/>
							<div className="flex items-center gap-2">
								<Label>Sort by</Label>
								<Select>
									<SelectTrigger className="w-[180px] bg-background">
										<SelectValue placeholder="Name" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Name">Name</SelectItem>
										<SelectItem value="Area">Area</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</CardHeader>
					<CardContent className="grid gap-2">
						<div className="p-4 rounded-lg bg-background border-border flex items-center gap-2">
							<User2 className="w-10 h-10 p-[6px] bg-primary rounded-full text-white" />
							<p>James Doe</p>
							<div className="flex items-center gap-1.5 ml-auto">
								Send to
								<Select>
									<SelectTrigger className="w-[100px] bg-background">
										<SelectValue placeholder="Area 1" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Area 1">Area 1</SelectItem>
										<SelectItem value="Area 2">Area 2</SelectItem>
										<SelectItem value="Area 3">Area 3</SelectItem>
										<SelectItem value="Area 4">Area 4</SelectItem>
									</SelectContent>
								</Select>
								<Button>
									Confirm <Check />
								</Button>
							</div>
						</div>
						<div className="p-4 rounded-lg bg-background border-border flex items-center gap-2">
							<User2 className="w-10 h-10 p-[6px] bg-primary rounded-full text-white" />
							<p>John Doe</p>
							<div className="flex items-center gap-1.5 ml-auto">
								Send to
								<Select>
									<SelectTrigger className="w-[100px] bg-background">
										<SelectValue placeholder="Area 1" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Area 1">Area 1</SelectItem>
										<SelectItem value="Area 2">Area 2</SelectItem>
										<SelectItem value="Area 3">Area 3</SelectItem>
										<SelectItem value="Area 4">Area 4</SelectItem>
									</SelectContent>
								</Select>
								<Button>
									Confirm <Check />
								</Button>
							</div>
						</div>
						<div className="p-4 rounded-lg bg-background border-border flex items-center gap-2">
							<User2 className="w-10 h-10 p-[6px] bg-primary rounded-full text-white" />
							<p>Jane Doe</p>
							<div className="flex items-center gap-1.5 ml-auto">
								Send to
								<Select>
									<SelectTrigger className="w-[100px] bg-background">
										<SelectValue placeholder="Area 1" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Area 1">Area 1</SelectItem>
										<SelectItem value="Area 2">Area 2</SelectItem>
										<SelectItem value="Area 3">Area 3</SelectItem>
										<SelectItem value="Area 4">Area 4</SelectItem>
									</SelectContent>
								</Select>
								<Button>
									Confirm <Check />
								</Button>
							</div>
						</div>
					</CardContent>
				</Card>
				<Card className="bg-gradient-to-l from-card/50 to-background/50">
					<CardHeader>
						<CardTitle>Working staff</CardTitle>
						<div className="flex items-center justify-between gap-4">
							<Input
								className="basis-1/2 bg-background "
								placeholder="Search for member"
							/>
							<div className="flex items-center gap-2">
								<Label>Sort by</Label>
								<Select>
									<SelectTrigger className="w-[180px] bg-background">
										<SelectValue placeholder="Status" />
									</SelectTrigger>
									<SelectContent>
										<SelectItem value="Name">Status</SelectItem>
										<SelectItem value="Name">Name</SelectItem>
										<SelectItem value="Area">Area</SelectItem>
									</SelectContent>
								</Select>
							</div>
						</div>
					</CardHeader>
					<CardContent className="grid gap-2">
						<div className="p-4 rounded-lg bg-background border-border flex items-center gap-2">
							<User2 className="w-10 h-10 p-[6px] bg-primary rounded-full text-white" />
							<p>James Doe</p>
							<div className="grid grid-cols-2  ml-auto ">
								<p>
									Status: <span className="text-rose-600">Critical</span>
								</p>
								<p>
									Location: <span>Area 1</span>
								</p>
							</div>
						</div>
						<div className="p-4 rounded-lg bg-background border-border flex items-center gap-2">
							<User2 className="w-10 h-10 p-[6px] bg-primary rounded-full text-white" />
							<p>John Doe</p>
							<div className="grid grid-cols-2  ml-auto ">
								<p>
									Status: <span className="text-amber-600">Fine</span>
								</p>
								<p>
									Location: <span>Area 1</span>
								</p>
							</div>
						</div>
						<div className="p-4 rounded-lg bg-background border-border flex items-center gap-2">
							<User2 className="w-10 h-10 p-[6px] bg-primary rounded-full text-white" />
							<p>Jane Doe</p>
							<div className="grid grid-cols-2  ml-auto ">
								<p>
									Status: <span className="text-emerald-600">Good</span>
								</p>
								<p>
									Location: <span>Area 1</span>
								</p>
							</div>
						</div>
					</CardContent>
				</Card>
			</CardContent>
		</Card>
	);
}
