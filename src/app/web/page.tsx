'use client';
import { BarChartCustom } from '@/components/custom/bar-chart';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChartExample } from '@/components/web/home/area-chart';
import Controls from '@/components/web/home/controls';
import GasInfo1 from '@/components/web/home/gas-info-1';
import GasInfo2 from '@/components/web/home/gas-info-2';
import { Smile } from 'lucide-react';

export default function Page() {
	return (
		<div className="w-full h-[calc(100vh-6rem)] flex flex-col lg:grid lg:grid-cols-8 gap-2">
			<div className="col-span-6 flex flex-col lg:grid gap-2 grid-cols-3 ">
				<Card className="bg-background">
					<CardHeader>
						<CardTitle className="font-bold">Area 1</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-2xl">All important information about Area 1</p>
					</CardContent>
				</Card>

				<Card className="text-white bg-emerald-500">
					<CardHeader>
						<CardTitle className="flex items-center gap-1.5  font-bold">
							Status: good <Smile />
						</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-lg font-semibold">
							current PM2.5 level: 12
							<sub>
								µ/m<sup>3</sup>
							</sub>
						</p>

						<div className="grid grid-cols-2 gap-2 mt-4">
							<div className="text-foreground bg-card py-1 px-4 rounded-full">
								<div className="flex gap-2 items-center">
									<div className="text-3xl font-bold">12</div>
									<div className="flex flex-col">
										<p className="text-base font-semibold  leading-3">Inside</p>
										<p className="text-sm text-muted-foreground">
											µ/m<sup>3</sup>
										</p>
									</div>
								</div>
							</div>

							<div className="text-foreground bg-card py-1 px-4 rounded-full">
								<div className="flex gap-2 items-center">
									<div className="text-3xl font-bold">122</div>
									<div className="flex flex-col">
										<p className="text-base font-semibold  leading-3">
											Outside
										</p>
										<p className="text-sm text-muted-foreground">
											µ/m<sup>3</sup>
										</p>
									</div>
								</div>
							</div>
						</div>
					</CardContent>
				</Card>

				<GasInfo1 />

				<AreaChartExample />
				<div className="grid gap-2">
					<GasInfo2 />
					<BarChartCustom className={'bg-background'} />
				</div>
			</div>

			<Controls />
		</div>
	);
}
