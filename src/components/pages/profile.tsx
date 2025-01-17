import { Edit, LogOut, User } from 'lucide-react';
import PhoneWrapper from '../custom/phone-wrapper';
import { Button } from '../ui/button';
import { Input } from '../ui/input';

export default function Profile() {
	return (
		<PhoneWrapper active="profile">
			<div className="grid gap-3 items-center">
				<User className="w-16 h-16 mx-auto bg-gradient-to-br from-primary to-indigo-500/80 text-white p-2 rounded-full" />
				<div className="flex items-center gap-1.5 relative">
					<Input
						value={'Username: John Doe'}
						className="font-semibold h-12 text-base flex-grow"
					/>
					<Edit className="w-12 absolute right-0" />
				</div>
				<div className="flex items-center gap-1.5 relative">
					<Input
						value={'Email: John@Doe.com'}
						className="font-semibold h-12 text-base flex-grow"
					/>
					<Edit className="w-12 absolute right-0" />
				</div>
				<div className="flex items-center gap-1.5">
					<div className="flex items-center gap-1.5 relative w-1/2">
						<Input
							value={'Age: 26'}
							className="font-semibold h-12 text-base "
						/>
						<Edit className="w-12 absolute right-0" />
					</div>
					<div className="flex items-center gap-1.5 relative w-1/2">
						<Input
							value={'Height: 172cm'}
							className="font-semibold h-12 text-base "
						/>
						<Edit className="w-12 absolute right-0" />
					</div>
				</div>
				<div className="flex items-center gap-1.5 relative">
					<ul className="font-semibold list-disc rounded-md border border-input bg-transparent px-3 py-1 p-2 h-40 resize-none text-base flex-grow">
						<p>Diseases: </p>
						<li className="ml-4">Hearts</li>
						<li className="ml-4">Lungs</li>
						<li className="ml-4">Asthma</li>
					</ul>
					<Edit className="w-12 absolute right-0 top-4" />
				</div>
				<div className="flex gap-1.5">
					<Button className="text-base w-full">Reset password?</Button>
					<Button className="text-base w-full" variant={'secondary'}>
						Log out <LogOut />{' '}
					</Button>
				</div>
			</div>
		</PhoneWrapper>
	);
}
