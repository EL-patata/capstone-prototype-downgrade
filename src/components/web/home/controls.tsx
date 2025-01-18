import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
	AirVent,
	AlertTriangleIcon,
	Bell,
	Fan,
	SunDim,
	Wind,
} from 'lucide-react';

export default function Controls() {
	return (
		<Card className="bg-background  col-span-2">
			<CardHeader>
				<CardTitle className="text-lg font-bold">Controls</CardTitle>
			</CardHeader>
			<CardContent className="flex flex-col items-center gap-4">
				<div className="flex items-center justify-between w-full">
					<h1 className="text-3xl font-semibold">Temprature </h1>
					<p className="text-lg font-semibold text-amber-700 dark:text-amber-500">
						Medium
					</p>
				</div>
				<div className="flex flex-col items-center">
					<h1 className="text-3xl font-semibold h-32 aspect-square flex items-center justify-center rounded-full bg-gradient-to-br text-yellow-700 dark:text-yellow-500 outline-amber-400 outline to-yellow-500/40 from-transparent">
						26&deg;C
					</h1>
				</div>

				<div className="grid grid-cols-3  gap-2">
					<Button className=" rounded-xl h-16  flex flex-col w-24">
						<AirVent />
						Cooling
					</Button>
					<Button
						variant={'secondary'}
						className=" rounded-xl h-16 flex flex-col"
					>
						<SunDim />
						Heating
					</Button>
					<Button
						variant={'secondary'}
						className=" rounded-xl flex flex-col h-16 "
					>
						<Fan />
						Dry
					</Button>
				</div>

				<Separator className="my-3" />

				<div className="flex items-center justify-between w-full">
					<h1 className="text-3xl font-semibold my-4">Humidity </h1>
					<p className="text-lg font-bold">65%</p>
				</div>

				<div className="h-10 bg-gradient-to-r from-pink-400 to-blue-500 w-full rounded-lg relative">
					<div className="h-10 absolute top-0 left-[65%] w-3 bg-white rounded-full outline outline-1 outline-gray-700">
						<div className="w-2 left-1/2 -translate-x-1/2 h-[1px] absolute bg-gray-700 top-[40%]"></div>
						<div className="w-2 left-1/2 -translate-x-1/2 h-[1px] absolute bg-gray-700 top-[45%]"></div>
						<div className="w-2 left-1/2 -translate-x-1/2 h-[1px] absolute bg-gray-700 top-[50%]"></div>
					</div>
				</div>

				<div className="grid grid-cols-3  gap-2">
					<Button className=" rounded-xl h-16 w-24">Auto</Button>
					<Button variant={'secondary'} className=" rounded-xl h-16">
						60%
					</Button>
					<Button variant={'secondary'} className=" rounded-xl  h-16 ">
						30%
					</Button>
				</div>

				<Separator className="my-3" />

				<div className="flex items-center justify-between w-full">
					<h1 className="text-3xl font-semibold my-4">Air quality </h1>
					<p className="text-lg font-semibold text-emerald-500">Good</p>
				</div>

				<div className="grid grid-cols-3  gap-2">
					<Button className=" rounded-xl h-16  flex flex-col w-24">
						<Wind />
						Air pump
					</Button>
					<Button
						variant={'secondary'}
						className=" rounded-xl h-16 flex flex-col"
					>
						<Bell />
						Notifiy
					</Button>
					<Button
						variant={'destructive'}
						className=" rounded-xl flex flex-col h-16 bg-rose-600"
					>
						<AlertTriangleIcon />
						Alert
					</Button>
				</div>
			</CardContent>
		</Card>
	);
}
