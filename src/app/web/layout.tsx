'use client';
import {
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbList,
	BreadcrumbPage,
	BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import {
	SidebarInset,
	SidebarProvider,
	SidebarTrigger,
} from '@/components/ui/sidebar';
import { LeftSidebar } from '@/components/web/left-sidebar';
import { usePathname } from 'next/navigation';

type Props = {
	children: React.ReactNode;
};

export default function Layout({ children }: Props) {
	const path = usePathname();

	if (path.includes('/login'))
		return (
			<main className="relative w-screen h-screen bg-card/50">{children}</main>
		);
	else
		return (
			<SidebarProvider>
				<LeftSidebar />
				<SidebarInset>
					<header className="flex h-16 sticky z-[5000] top-0 bg-background border border-b  items-center gap-2 ">
						<div className="flex items-center gap-2 px-4">
							<SidebarTrigger className="-ml-1" />
							<Separator orientation="vertical" className="mr-2 h-4" />
							<Breadcrumb>
								<BreadcrumbList>
									<BreadcrumbItem className="hidden md:block">
										<BreadcrumbLink href="#">Link 1</BreadcrumbLink>
									</BreadcrumbItem>
									<BreadcrumbSeparator className="hidden md:block" />
									<BreadcrumbItem>
										<BreadcrumbPage>Link 2</BreadcrumbPage>
									</BreadcrumbItem>
								</BreadcrumbList>
							</Breadcrumb>
						</div>
					</header>
					<main className="w-full bg-card min-h-screen p-4">{children}</main>
				</SidebarInset>
			</SidebarProvider>
		);
}
