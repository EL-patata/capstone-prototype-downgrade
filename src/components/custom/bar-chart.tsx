'use client';

import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

import {
	Card,
	CardContent,
	CardDescription,
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
	{ month: '9', desktop: 186, fill: '#10b981' },
	{ month: '10', desktop: 305, fill: '#fbbf24' },
	{ month: '11', desktop: 73, fill: '#10b981' },
	{ month: '12', desktop: 209, fill: '#fbbf24' },
	{ month: '1', desktop: 214, fill: '#fbbf24' },
	{ month: '2', desktop: 400, fill: '#e11d48' },
	{ month: '3', desktop: 500, fill: '#e11d48' },
	{ month: '4', desktop: 214, fill: '#fbbf24' },
	{ month: '5', desktop: 73, fill: '#10b981' },
];

const chartConfig = {
	desktop: {
		label: 'Index',
		color: '',
	},
} satisfies ChartConfig;

export function BarChartCustom() {
	return (
		<Card>
			<CardHeader>
				<CardTitle>Forecast</CardTitle>
				<CardDescription>9 AM - 5 PM</CardDescription>
			</CardHeader>
			<CardContent>
				<ChartContainer config={chartConfig}>
					<BarChart accessibilityLayer data={chartData}>
						<CartesianGrid vertical={false} />
						<XAxis
							dataKey="month"
							tickLine={false}
							tickMargin={10}
							axisLine={false}
							tickFormatter={(value) => value.slice(0, 3)}
						/>
						<ChartTooltip
							cursor={false}
							content={<ChartTooltipContent hideLabel />}
						/>
						<Bar dataKey="desktop" radius={8}></Bar>
					</BarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex-col items-start gap-2 text-sm">
				<div className="leading-none text-muted-foreground">
					Showing forecast for air quality
				</div>
			</CardFooter>
		</Card>
	);
}
