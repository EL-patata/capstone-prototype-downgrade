'use client';

import { Bot, ChartColumn, MapPinned, User } from 'lucide-react';
import * as React from 'react';

import {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarHeader,
	SidebarRail,
} from '@/components/ui/sidebar';
import { TeamSwitcher } from './logo';
import { NavMain } from './nav-switch';
import { NavUser } from './nav-user';

// This is sample data.
const data = {
	user: {
		name: 'John doe',
		email: 'John@Doe.com',
	},

	navMain: [
		{
			title: 'Areas',
			url: '#',
			icon: MapPinned,
			isActive: true,
			items: [
				{
					title: 'Area 1',
					url: '#',
				},
				{
					title: 'Area 2',
					url: '#',
				},
				{
					title: 'Area 3',
					url: '#',
				},
				{
					title: 'Area 4',
					url: '#',
				},
			],
		},
		{
			title: 'Chat bot',
			url: '#',
			icon: Bot,
			items: [
				{
					title: 'Settings',
					url: '#',
				},
				{
					title: 'Chat',
					url: '#',
				},
			],
		},
		{
			title: 'Analysis',
			url: '#',
			icon: ChartColumn,
			items: [
				{
					title: 'Charts',
					url: '#',
				},
			],
		},
		{
			title: 'Users',
			url: '#',
			icon: User,
			items: [
				{
					title: 'Overview',
					url: '#',
				},
				{
					title: 'Areas',
					url: '#',
				},
			],
		},
	],
};

export function LeftSidebar({
	...props
}: React.ComponentProps<typeof Sidebar>) {
	return (
		<Sidebar collapsible="icon" {...props}>
			<SidebarHeader className="bg-background">
				<TeamSwitcher />
			</SidebarHeader>
			<SidebarContent className="bg-background">
				<NavMain items={data.navMain} />
			</SidebarContent>
			<SidebarFooter className="bg-background">
				<NavUser user={data.user} />
			</SidebarFooter>
			<SidebarRail />
		</Sidebar>
	);
}
