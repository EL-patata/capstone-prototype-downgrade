'use client';

import { TrendingUp } from 'lucide-react';
import { Area, AreaChart, CartesianGrid, XAxis } from 'recharts';

import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import {
	ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from '@/components/ui/chart';
const chartData = [
	{ month: '8', today: 73, yesterday: 190 },
	{ month: '9', today: 186, yesterday: 80 },
	{ month: '10', today: 305, yesterday: 200 },
	{ month: '11', today: 237, yesterday: 120 },
	{ month: '12', today: 73, yesterday: 190 },
	{ month: '1', today: 209, yesterday: 130 },
	{ month: '2', today: 214, yesterday: 140 },
	{ month: '3', today: 186, yesterday: 80 },
	{ month: '4', today: 305, yesterday: 200 },
	{ month: '5', today: 237, yesterday: 120 },
];

const chartConfig = {
	today: {
		label: 'Today',
		color: 'hsl(var(--chart-2))',
	},
	yesterday: {
		label: 'Yesterday',
		color: 'hsl(var(--chart-1))',
	},
} satisfies ChartConfig;

export function AreaChartExample() {
	return (
		<Card className="bg-background col-span-3 w-full">
			<CardHeader>
				<CardTitle className="text-lg font-bold">Today vs Yesterday</CardTitle>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<AreaChart
						accessibilityLayer
						data={chartData}
						margin={{
							left: 12,
							right: 12,
						}}
					>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							axisLine={false}
							tickMargin={8}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip cursor={false} content={<ChartTooltipContent />} />
						<defs>
							<linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
								<stop
									offset="5%"
									stopColor="var(--color-yesterday)"
									stopOpacity={0.8}
								/>
								<stop
									offset="95%"
									stopColor="var(--color-yesterday)"
									stopOpacity={0.1}
								/>
							</linearGradient>
							<linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
								<stop
									offset="5%"
									stopColor="var(--color-today)"
									stopOpacity={0.8}
								/>
								<stop
									offset="95%"
									stopColor="var(--color-today)"
									stopOpacity={0.1}
								/>
							</linearGradient>
						</defs>
						<Area
							dataKey="today"
							type="natural"
							fill="url(#fillMobile)"
							fillOpacity={0.4}
							stroke="var(--color-today)"
							stackId="a"
						/>
						<Area
							dataKey="yesterday"
							type="natural"
							fill="url(#fillDesktop)"
							fillOpacity={0.4}
							stroke="var(--color-yesterday)"
							stackId="a"
						/>
					</AreaChart>
				</ChartContainer>
			</CardContent>
			<CardFooter>
				<div className="flex w-full items-start gap-2 text-sm">
					<div className="grid gap-2">
						<div className="flex items-center gap-2 font-medium leading-none">
							Better quality by 5.2% today <TrendingUp className="h-4 w-4" />
						</div>
						<div className="flex items-center gap-2 leading-none text-muted-foreground">
							8 AM - 5 PM
						</div>
					</div>
				</div>
			</CardFooter>
		</Card>
	);
}
