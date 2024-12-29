"use client";

import { Header } from "./header";
import { Search } from "@/components/shared/search";
import { ThemeSwitch } from "@/components/shared/theme-switch";
import { ProfileDropdown } from "./profile-dropdown";
import { Main } from "./main";

interface PageContainerProps {
	children: React.ReactNode;
	title?: string;
}

export function PageContainer({ children, title }: PageContainerProps) {
	return (
		<div className="flex min-h-screen w-full flex-col">
			<Header className="w-full flex flex-row justify-between border-border border-b">
				<Search />
				<div className="ml-auto flex flex-row flex-1 items-center justify-end space-x-4">
					<ThemeSwitch />
					<ProfileDropdown />
				</div>
			</Header>
			<Main>
				{title && (
					<div className="mb-2 flex items-center justify-between space-y-2 flex-wrap gap-x-4">
						<div>
							<h2 className="text-2xl font-bold tracking-tight">{title}</h2>
							<p className="text-muted-foreground">
								Manage your {title.toLowerCase()} here
							</p>
						</div>
					</div>
				)}
				{children}
			</Main>
		</div>
	);
} 