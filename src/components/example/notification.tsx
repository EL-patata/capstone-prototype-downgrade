import { AlertTriangle, Cloud } from 'lucide-react';
import HomeChart from '../custom/home-chart';
import PhoneWrapper from '../custom/phone-wrapper';
import { Card, CardContent } from '../ui/card';

export default function NotificationExample() {
	return (
		<PhoneWrapper className={'overflow-hidden'}>
			<div className="pt-8">
				<HomeChart
					variant={'green'}
					reading={46}
					detailedReadings={{ one: 43, two: 48 }}
				/>
			</div>
			<div className="absolute bg-gray-950/30 z-40 w-[200%] h-[200%] -top-1/2 left-1/2 -translate-x-1/2"></div>
			<div className="absolute z-50 top-6 left-1/2 -translate-x-1/2">
				<Card className="bg-gray-50 text-start w-[355px] text-black rounded">
					<CardContent className="p-4 text-start">
						<p className="font-semibold text-lg flex items-center justify-between ">
							<span className="flex items-center gap-1.5">
								Heads up! <AlertTriangle className="text-rose-500" />
							</span>
							<span className="text-muted-foreground text-sm">5 mins ago</span>
						</p>
						<p className="text-muted-foreground ">This is a notification</p>
					</CardContent>
				</Card>
				<Card className="bg-gray-50 text-start w-[355px] text-black rounded mt-[1px]">
					<CardContent className="p-4 text-start">
						<p className="font-semibold text-lg flex items-center justify-between ">
							<span className="flex items-center gap-1.5">
								Heads up! <Cloud className="text-emerald-500" />
							</span>
							<span className="text-muted-foreground text-sm">6 mins ago</span>
						</p>
						<p className="text-muted-foreground ">This is a notification</p>
					</CardContent>
				</Card>
			</div>
		</PhoneWrapper>
	);
}
