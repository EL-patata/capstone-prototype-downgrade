import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartConfig, ChartContainer } from '@/components/ui/chart';
import {
	Label,
	PolarGrid,
	PolarRadiusAxis,
	RadialBar,
	RadialBarChart,
} from 'recharts';

export default function TopSecondCard() {
	const chartData = [
		{ browser: 'safari', visitors: 76, fill: 'var(--color-safari)' },
	];

	const chartConfig = {
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
				<CardTitle className="font-bold">Gas info</CardTitle>
			</CardHeader>
			<CardContent className=" gap-2">
				<div className="flex items-center gap-2">
					<ChartContainer
						config={chartConfig}
						className="mx-auto aspect-square max-h-[125px]"
					>
						<RadialBarChart
							data={chartData}
							startAngle={0}
							endAngle={100}
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
														className="fill-foreground text-xl font-bold"
													>
														{chartData[0].visitors.toLocaleString()}
													</tspan>
													<tspan
														x={viewBox.cx}
														y={(viewBox.cy || 0) + 12}
														className="fill-muted-foreground text-xs"
													>
														PM10
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
						config={chartConfig}
						className="mx-auto aspect-square max-h-[125px]"
					>
						<RadialBarChart
							data={chartData}
							startAngle={0}
							endAngle={60}
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
														className="fill-foreground text-xl font-bold"
													>
														{[chartData[0].visitors + 20].toLocaleString()}
													</tspan>
													<tspan
														x={viewBox.cx}
														y={(viewBox.cy || 0) + 12}
														className="fill-muted-foreground text-xs"
													>
														PM2.5
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
						config={chartConfig}
						className="mx-auto aspect-square max-h-[125px]"
					>
						<RadialBarChart
							data={chartData}
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
														className="fill-foreground text-xl font-bold"
													>
														{(chartData[0].visitors + 12).toLocaleString()}
													</tspan>
													<tspan
														x={viewBox.cx}
														y={(viewBox.cy || 0) + 12}
														className="fill-muted-foreground text-xs"
													>
														CO<sub>2</sub>
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
