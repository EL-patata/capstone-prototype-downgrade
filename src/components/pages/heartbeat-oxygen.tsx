'use client';

import {
	Label,
	PolarGrid,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart,
} from 'recharts';

import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';

import { Smile, User } from 'lucide-react';
import PhoneWrapper from '../custom/phone-wrapper';
import { Button } from '../ui/button';

export default function HeartbeatOxygen() {
	return (
		<PhoneWrapper active="profile">
			<div className="grid grid-cols-1 gap-3">
				<Component />
				<Component2 />
				<Button>
					<User />
					Profile
				</Button>
			</div>
		</PhoneWrapper>
	);
}

const chartData1 = [
	{ browser: 'safari', visitors: 85, fill: 'var(--color-safari)' },
];

const chartConfig1 = {
	visitors: {
		label: 'Visitors',
	},
	safari: {
		label: 'Safari',
		color: '#10b981',
	},
} satisfies ChartConfig;

export function Component() {
	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>Pulse rate</CardTitle>
				<CardDescription>
					Average pulse rate is 60 to 10 beats per minute
				</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={chartConfig1}
					className="mx-auto aspect-square max-h-[170px]"
				>
					<RadialBarChart
						data={chartData1}
						startAngle={0}
						endAngle={280}
						innerRadius={80 / 1.4}
						outerRadius={110 / 1.4}
					>
						<PolarGrid
							gridType="circle"
							radialLines={false}
							stroke="none"
							className="first:fill-muted last:fill-background"
							polarRadius={[86 / 1.4, 74 / 1.4]}
						/>
						<RadialBar dataKey="visitors" background cornerRadius={10} />
						<PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
							<Label
								content={({ viewBox }) => {
									if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor="middle"
												dominantBaseline="middle"
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className="fill-foreground text-4xl font-bold"
												>
													{chartData1[0].visitors.toLocaleString()}
												</tspan>
												<tspan
													x={viewBox.cx}
													y={(viewBox.cy || 0) + 24}
													className="fill-muted-foreground"
												>
													bpm
												</tspan>
											</text>
										);
									}
								}}
							/>
						</PolarRadiusAxis>
					</RadialBarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex items-center justify-center w-full">
				<p className="flex items-center gap-1.5">
					Status:
					<span className="text-emerald-500 flex items-center gap-1.5">
						good <Smile />
					</span>
				</p>
			</CardFooter>
		</Card>
	);
}

const chartData2 = [
	{ browser: 'safari', visitors: 90, fill: 'var(--color-safari)' },
];

const chartConfig2 = {
	visitors: {
		label: 'Visitors',
	},
	safari: {
		label: 'Safari',
		color: '#10b981',
	},
} satisfies ChartConfig;

export function Component2() {
	return (
		<Card className="flex flex-col">
			<CardHeader className="items-center pb-0">
				<CardTitle>Oxygen level</CardTitle>
				<CardDescription>
					Oxygen level should be 90/95% or higher
				</CardDescription>
			</CardHeader>
			<CardContent className="flex-1 pb-0">
				<ChartContainer
					config={chartConfig2}
					className="mx-auto aspect-square max-h-[170px]"
				>
					<RadialBarChart
						data={chartData2}
						startAngle={0}
						endAngle={360 * 0.9}
						innerRadius={80 / 1.4}
						outerRadius={110 / 1.4}
					>
						<PolarGrid
							gridType="circle"
							radialLines={false}
							stroke="none"
							className="first:fill-muted last:fill-background"
							polarRadius={[86 / 1.4, 74 / 1.4]}
						/>
						<RadialBar dataKey="visitors" background cornerRadius={10} />
						<PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
							<Label
								content={({ viewBox }) => {
									if (viewBox && 'cx' in viewBox && 'cy' in viewBox) {
										return (
											<text
												x={viewBox.cx}
												y={viewBox.cy}
												textAnchor="middle"
												dominantBaseline="middle"
											>
												<tspan
													x={viewBox.cx}
													y={viewBox.cy}
													className="fill-foreground text-4xl font-bold"
												>
													{chartData2[0].visitors.toLocaleString() + '%'}
												</tspan>
											</text>
										);
									}
								}}
							/>
						</PolarRadiusAxis>
					</RadialBarChart>
				</ChartContainer>
			</CardContent>
			<CardFooter className="flex items-center justify-center w-full">
				<p className="flex items-center gap-1.5">
					Status:
					<span className="text-emerald-500 flex items-center gap-1.5">
						good <Smile />
					</span>
				</p>
			</CardFooter>
		</Card>
	);
}
