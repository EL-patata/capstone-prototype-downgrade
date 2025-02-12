import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader } from '../ui/card';
import { RadialChart } from './radial-chart';
import { Angry, Annoyed, Cloud, Smile } from 'lucide-react';

type Props = {
	variant: 'green' | 'yellow' | 'red';
	reading: number;
	detailedReadings: {
		one: number;
		two: number;
	};
};

export default function HomeChart({
	variant,
	detailedReadings,
	reading,
}: Props) {
	return (
		<div className="grid gap-2">
			<Card>
				<CardContent
					className={cn(
						'pt-4 rounded-lg text-gray-200',
						variant === 'red' && 'bg-rose-600 ',
						variant === 'yellow' && 'bg-yellow-500 ',
						variant === 'green' && 'bg-emerald-500 '
					)}
				>
					<p className="font-bold text-lg flex items-center justify-between pb-3">
						<span>Area 1</span>
						<Cloud className={cn('w-8 h-8')} />
					</p>
					<div className="flex gap-2 items-center">
						<p className="font-semibold">Quality:</p>
						{variant === 'green' ? (
							<div className="flex gap-[4px] items-center ">
								Good <Smile />
							</div>
						) : variant === 'yellow' ? (
							<div className="flex gap-[4px] items-center ">
								Moderate <Annoyed />
							</div>
						) : (
							<div className="flex gap-[4px] items-center ">
								Bad <Angry />
							</div>
						)}
					</div>
				</CardContent>
			</Card>

			<RadialChart variant={variant} reading={reading} />

			<div className="grid grid-cols-2 gap-2">
				<Card className="">
					<CardHeader className="font-bold flex text-xl px-6 py-3">
						<p>
							PM<sub>10</sub>
						</p>
					</CardHeader>

					<CardContent>
						<p
							className={cn(
								'font-semibold text-lg',
								variant === 'red' && 'text-rose-600',
								variant === 'yellow' && 'text-amber-600',
								variant === 'green' && 'text-emerald-600'
							)}
						>
							{detailedReadings.one}
						</p>
						<p className="text-muted-foreground">% of norm</p>
					</CardContent>
				</Card>

				<Card>
					<CardHeader className="font-bold flex text-xl px-6 py-3">
						<p>
							PM<sub>2.5</sub>
						</p>
					</CardHeader>
					<CardContent>
						<p
							className={cn(
								'font-semibold text-lg',
								variant === 'red' && 'text-rose-600',
								variant === 'yellow' && 'text-amber-600',
								variant === 'green' && 'text-emerald-600'
							)}
						>
							{detailedReadings.two}
						</p>
						<p className="text-muted-foreground">% of norm</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
