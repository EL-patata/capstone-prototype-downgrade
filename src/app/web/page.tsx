'use client';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { AreaChartExample } from '@/components/web/home/area-chart';
import Controls from '@/components/web/home/controls';
import TopSecondCard from '@/components/web/home/top-second-card';
import { Smile } from 'lucide-react';

export default function Page() {
	return (
		<div className="w-full h-[calc(100vh-6rem)] flex flex-col lg:grid lg:grid-cols-8 gap-2">
			<div className="col-span-6 flex flex-col lg:grid gap-2 grid-cols-3 ">
				<Card className="bg-background">
					<CardHeader>
						<CardTitle className="font-bold">Area 1</CardTitle>
						<CardDescription>Located after Area 2 district 22</CardDescription>
					</CardHeader>
				</Card>

				<TopSecondCard />

				<Card className="text-emerald-700 dark:text-emerald-500 bg-gradient-to-br from-transparent to-emerald-600/30 border-t-emerald-500">
					<CardHeader>
						<CardTitle className="flex items-center gap-1.5  font-bold">
							Status: good <Smile />
						</CardTitle>
					</CardHeader>
					<CardContent>
						current PM2.5 level: 12
						<sub>
							µ/m<sup>3</sup>
						</sub>
					</CardContent>
				</Card>
				<AreaChartExample />
				<div className="grid-cols-3"></div>
			</div>

			<Controls />
		</div>
	);
}
