import { cn } from '@/lib/utils';
import { Annoyed, Cloud } from 'lucide-react';
import { BarChartCustom } from '../custom/bar-chart';
import PhoneWrapper from '../custom/phone-wrapper';
import { Card, CardContent, CardHeader } from '../ui/card';

export default function Forecast() {
	return (
		<PhoneWrapper>
			<div className="grid gap-2">
				<Card>
					<CardContent
						className={cn(
							'pt-4 rounded-xl bg-gradient-to-br bg-amber-500 text-gray-100'
						)}
					>
						<p className="font-bold text-lg flex items-center justify-between pb-3">
							<span>Area 1</span>
							<Cloud className="w-8 h-8 " />
						</p>
						<div className="flex gap-2 items-center">
							<p className="font-semibold">Quality:</p>
							<div className="flex gap-[4px] items-center ">
								Moderate <Annoyed />
							</div>
						</div>
					</CardContent>
				</Card>

				<BarChartCustom />

				<div className="grid grid-cols-2 gap-2">
					<Card>
						<CardHeader className="font-bold flex text-xl px-6 py-3">
							<p>
								PM<sub>10</sub>
							</p>
						</CardHeader>

						<CardContent>
							<p className={cn('font-semibold text-lg', 'text-amber-600')}>
								{122}
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

									'text-amber-600'
								)}
							>
								{201}
							</p>
							<p className="text-muted-foreground">% of norm</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</PhoneWrapper>
	);
}
