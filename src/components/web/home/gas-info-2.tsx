import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import {
	Label,
	PolarGrid,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart,
} from 'recharts';

export default function GasInfo2() {
	const chartData = [
		{ browser: 'safari', visitors: 76, fill: 'var(--color-safari)' },
	];

	const chartConfig = {
		visitors: {
			label: 'Visitors',
		},
		safari: {
			label: 'Safari',
			color: '#fbbf24',
		},
	} satisfies ChartConfig;

	const chartData2 = [
		{ browser: 'safari', visitors: 76, fill: 'var(--color-safari)' },
	];

	const chartConfig2 = {
		visitors: {
			label: 'Visitors',
		},
		safari: {
			label: 'Safari',
			color: '#e11d48',
		},
	} satisfies ChartConfig;

	const chartData3 = [
		{ browser: 'safari', visitors: 76, fill: 'var(--color-safari)' },
	];

	const chartConfig3 = {
		visitors: {
			label: 'Visitors',
		},
		safari: {
			label: 'Safari',
			color: '#10b981',
		},
	} satisfies ChartConfig;

	return (
		<Card className="bg-background  ">
			<CardHeader>
				<CardTitle className="font-bold">More gas info</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="flex items-center gap-2 justify-between">
					<ChartContainer
						config={chartConfig}
						className=" aspect-square h-[90px]"
					>
						<RadialBarChart
							data={chartData}
							startAngle={0}
							endAngle={120}
							innerRadius={40}
							outerRadius={55}
						>
							<PolarGrid
								gridType="circle"
								radialLines={false}
								stroke="none"
								className="first:fill-muted last:fill-background"
								polarRadius={[43, 37]}
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
														className="fill-foreground text-lg font-bold"
													>
														{chartData[0].visitors.toLocaleString()}
													</tspan>
													<tspan
														x={viewBox.cx}
														y={(viewBox.cy || 0) + 12}
														className="fill-muted-foreground text-xs "
													>
														SO1
													</tspan>
												</text>
											);
										}
									}}
								/>
							</PolarRadiusAxis>
						</RadialBarChart>
					</ChartContainer>

					<ChartContainer
						config={chartConfig2}
						className=" aspect-square h-[90px]"
					>
						<RadialBarChart
							data={chartData2}
							startAngle={0}
							endAngle={220}
							innerRadius={40}
							outerRadius={55}
						>
							<PolarGrid
								gridType="circle"
								radialLines={false}
								stroke="none"
								className="first:fill-muted last:fill-background"
								polarRadius={[43, 37]}
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
														className="fill-foreground text-lg font-bold"
													>
														{[chartData2[0].visitors + 20].toLocaleString()}
													</tspan>
													<tspan
														x={viewBox.cx}
														y={(viewBox.cy || 0) + 12}
														className="fill-muted-foreground text-xs"
													>
														O3
													</tspan>
												</text>
											);
										}
									}}
								/>
							</PolarRadiusAxis>
						</RadialBarChart>
					</ChartContainer>

					<ChartContainer
						config={chartConfig3}
						className=" aspect-square h-[90px]"
					>
						<RadialBarChart
							data={chartData3}
							startAngle={0}
							endAngle={90}
							innerRadius={40}
							outerRadius={55}
						>
							<PolarGrid
								gridType="circle"
								radialLines={false}
								stroke="none"
								className="first:fill-muted last:fill-background"
								polarRadius={[43, 37]}
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
														className="fill-foreground text-lg font-bold"
													>
														{(chartData3[0].visitors + 12).toLocaleString()}
													</tspan>
													<tspan
														x={viewBox.cx}
														y={(viewBox.cy || 0) + 12}
														className="fill-muted-foreground text-xs"
													>
														NO2
													</tspan>
												</text>
											);
										}
									}}
								/>
							</PolarRadiusAxis>
						</RadialBarChart>
					</ChartContainer>
				</div>
			</CardContent>
		</Card>
	);
}
