import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";

function HomeAnchor({
	href,
	children,
}: {
	href: string;
	children: ReactNode;
}) {
	return (
		<a
			href={href}
			className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-primary"
		>
			{children}
		</a>
	);
}

function NavItem({ to, children }: { to: string; children: ReactNode }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				[
					"rounded-full px-4 py-2 text-sm transition-colors",
					isActive
						? "bg-primary text-primary-foreground"
						: "text-muted-foreground hover:text-primary",
				].join(" ")
			}
		>
			{children}
		</NavLink>
	);
}

export function SiteShell({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-svh bg-background text-foreground">
			<header className="sticky top-0 z-20 border-b border-primary/10 bg-background/88 backdrop-blur-xl">
				<div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between gap-4 px-6 py-4 lg:px-8 xl:px-10 2xl:px-12">
					<Link className="flex items-center gap-3" to="/">
						<div className="flex size-10 items-center justify-center rounded-full border border-primary/15 bg-primary text-sm font-semibold tracking-[0.22em] text-primary-foreground shadow-lg shadow-primary/20">
							PK
						</div>
						<div>
							<p className="text-sm font-semibold tracking-[0.18em] text-foreground uppercase">
								Prima Kirana Spring
							</p>
							<p className="text-xs text-muted-foreground">
								Produsen pegas presisi sejak 1995
							</p>
						</div>
					</Link>

					<div className="flex items-center gap-2">
						<nav className="hidden items-center gap-1 rounded-full border border-primary/10 bg-background/80 p-1 shadow-sm shadow-primary/5 md:flex">
							<HomeAnchor href="/#profil">Profil</HomeAnchor>
							<HomeAnchor href="/#produk">Produk</HomeAnchor>
							<HomeAnchor href="/#kontak">Kontak</HomeAnchor>
							<NavItem to="/blog">Blog</NavItem>
						</nav>
						<Button asChild size="sm" className="hidden md:inline-flex">
							<a href="/#kontak">Hubungi Kami</a>
						</Button>
						<ModeToggle />
					</div>
				</div>
			</header>

			<main>{children}</main>

			<footer className="border-t border-primary/10 bg-muted/90">
				<div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between lg:px-8 xl:px-10 2xl:px-12">
					<p>
						PT Prima Kirana Spring • Jl. Lingkar Utara UMK (timur Djarum Oasis), Kudus 59325
					</p>
					<p>prima.kirana.spring@gmail.com • 081-330-339-909</p>
				</div>
			</footer>
		</div>
	);
}
