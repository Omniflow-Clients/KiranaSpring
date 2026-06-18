import * as Slot from "@radix-ui/react-slot";
import { PanelLeftIcon } from "lucide-react";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

type SidebarContextProps = {
	open: boolean;
	setOpen: (open: boolean) => void;
	toggleSidebar: () => void;
};

const SidebarContext = React.createContext<SidebarContextProps | null>(null);

function useSidebar() {
	const context = React.useContext(SidebarContext);
	if (!context) {
		throw new Error("useSidebar must be used within a SidebarProvider.");
	}

	return context;
}

function SidebarProvider({
	defaultOpen = true,
	children,
}: React.ComponentProps<"div"> & {
	defaultOpen?: boolean;
}) {
	const [open, setOpen] = React.useState(defaultOpen);
	const toggleSidebar = React.useCallback(() => {
		setOpen((prev) => !prev);
	}, []);

	const contextValue = React.useMemo(
		() => ({ open, setOpen, toggleSidebar }),
		[open, toggleSidebar]
	);

	return (
		<SidebarContext.Provider value={contextValue}>
			<div className="flex min-h-svh w-full">{children}</div>
		</SidebarContext.Provider>
	);
}

function Sidebar({ className, children }: React.ComponentProps<"aside">) {
	const { open, setOpen } = useSidebar();

	return (
		<>
			<aside
				className={cn(
					"fixed inset-y-0 left-0 z-40 hidden border-r bg-sidebar text-sidebar-foreground transition-all duration-200 md:flex md:flex-col",
					open ? "w-64" : "w-16",
					className
				)}
			>
				{children}
			</aside>
			{open && (
				<button
					aria-label="Close sidebar overlay"
					className="fixed inset-0 z-30 bg-black/40 md:hidden"
					onClick={() => setOpen(false)}
					type="button"
				/>
			)}
			<aside
				className={cn(
					"fixed inset-y-0 left-0 z-40 flex w-64 -translate-x-full flex-col border-r bg-sidebar text-sidebar-foreground transition-transform duration-200 md:hidden",
					open && "translate-x-0"
				)}
			>
				{children}
			</aside>
		</>
	);
}

function SidebarInset({ className, children }: React.ComponentProps<"main">) {
	const { open } = useSidebar();
	return (
		<main
			className={cn(
				"flex min-h-svh flex-1 flex-col transition-[margin] duration-200",
				open ? "md:ml-64" : "md:ml-16",
				className
			)}
		>
			{children}
		</main>
	);
}

function SidebarTrigger({
	className,
	...props
}: React.ComponentProps<typeof Button>) {
	const { toggleSidebar } = useSidebar();

	return (
		<Button
			variant="ghost"
			size="icon"
			className={cn("size-8", className)}
			onClick={toggleSidebar}
			{...props}
		>
			<PanelLeftIcon className="size-4" />
			<span className="sr-only">Toggle Sidebar</span>
		</Button>
	);
}

function SidebarHeader({ className, ...props }: React.ComponentProps<"div">) {
	return <div className={cn("p-3", className)} {...props} />;
}

function SidebarContent({ className, ...props }: React.ComponentProps<"div">) {
	return (
		<div className={cn("flex-1 overflow-y-auto p-2", className)} {...props} />
	);
}

function SidebarFooter({ className, ...props }: React.ComponentProps<"div">) {
	return <div className={cn("border-t p-2", className)} {...props} />;
}

function SidebarGroup({ className, ...props }: React.ComponentProps<"div">) {
	return <div className={cn("mb-3", className)} {...props} />;
}

function SidebarGroupContent({
	className,
	...props
}: React.ComponentProps<"div">) {
	return <div className={cn("", className)} {...props} />;
}

function SidebarMenu({ className, ...props }: React.ComponentProps<"ul">) {
	return <ul className={cn("space-y-1", className)} {...props} />;
}

function SidebarMenuItem({ className, ...props }: React.ComponentProps<"li">) {
	return <li className={cn("", className)} {...props} />;
}

function SidebarMenuButton({
	className,
	isActive = false,
	asChild,
	tooltip,
	...props
}: React.ComponentProps<"button"> & {
	isActive?: boolean;
	asChild?: boolean;
	tooltip?: string;
}) {
	const { open } = useSidebar();
	const Comp = asChild ? Slot.Slot : "button";

	return (
		<Comp
			className={cn(
				"flex w-full items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
				isActive && "bg-sidebar-accent text-sidebar-accent-foreground",
				!open && "justify-center px-2 [&>div]:hidden [&>span]:hidden",
				className
			)}
			title={!open && tooltip ? tooltip : undefined}
			{...props}
		/>
	);
}

function SidebarRail() {
	return null;
}

export {
	Sidebar,
	SidebarContent,
	SidebarFooter,
	SidebarGroup,
	SidebarGroupContent,
	SidebarHeader,
	SidebarInset,
	SidebarMenu,
	SidebarMenuButton,
	SidebarMenuItem,
	SidebarProvider,
	SidebarRail,
	SidebarTrigger,
	useSidebar,
};
