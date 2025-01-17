import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangleIcon, Bell, Wind } from 'lucide-react';

export default function Controls() {
	return (
		<Card className="bg-background h-full col-span-2">
			<CardHeader>
				<CardTitle className="text-lg font-bold">Controls</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="grid grid-cols-3  gap-2">
					<Button className="aspect-square rounded-xl h-24  flex flex-col">
						<Wind />
						Air pump
					</Button>
					<Button
						variant={'secondary'}
						className="aspect-square rounded-xl h-24 flex flex-col"
					>
						<Bell />
						Notifiy
					</Button>
					<Button
						variant={'destructive'}
						className="aspect-square rounded-xl flex flex-col h-24 bg-rose-600"
					>
						<AlertTriangleIcon />
						Alert
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
