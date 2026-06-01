import type { ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

function SectionAnchor({ href, children }: { href: string; children: ReactNode }) {
	return (
		<a
			href={href}
			className="rounded-[1.2rem] px-4 py-3 text-base font-medium text-black transition-colors hover:text-primary"
		>
			{children}
		</a>
	);
}

function NavItem({
	to,
	children,
	end = false,
}: {
	to: string;
	children: ReactNode;
	end?: boolean;
}) {
	return (
		<NavLink
			to={to}
			end={end}
			className={({ isActive }) =>
				[
					"rounded-[1.2rem] px-6 py-3 text-base font-medium transition-colors",
					isActive
						? "bg-[#c5c5c5] text-white"
						: "text-black hover:text-primary",
				].join(" ")
			}
		>
			{children}
		</NavLink>
	);
}

export function SiteShell({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-svh bg-[#d2d2d2] text-foreground">
			<header className="sticky top-0 z-20 bg-white/92 backdrop-blur-xl">
				<div className="mx-auto flex w-full max-w-screen-[2048px] flex-col gap-4 px-5 py-5 lg:px-12 xl:px-14 2xl:px-16">
					<div className="flex items-center justify-between gap-6">
						<Link className="flex items-center gap-4" to="/">
							<div className="flex h-[4.8rem] w-[18rem] items-center md:h-[5.2rem] md:w-[21rem]">
								<img
									src="/home-assets/navbar-logo.png"
									alt="PT Prima Kirana Spring"
									className="h-full w-full object-contain object-left"
								/>
							</div>
						</Link>

						<nav className="hidden items-center gap-2 xl:flex">
							<NavItem to="/" end>
								Home
							</NavItem>
							<SectionAnchor href="/#profil">Profil</SectionAnchor>
							<SectionAnchor href="/#produk">Produk</SectionAnchor>
							<SectionAnchor href="/#kontak">Kontak</SectionAnchor>
							<NavItem to="/blog">Blog</NavItem>
							<Button
								asChild
								size="lg"
								className="ml-4 h-auto rounded-[1.2rem] bg-[#2f58e7] px-10 py-6 text-base font-medium text-white hover:bg-[#244be0]"
							>
								<a href="/#kontak">Hubungi Kami</a>
							</Button>
						</nav>
					</div>

					<nav className="flex flex-wrap items-center gap-2 xl:hidden">
						<NavItem to="/" end>
							Home
						</NavItem>
						<SectionAnchor href="/#profil">Profil</SectionAnchor>
						<SectionAnchor href="/#produk">Produk</SectionAnchor>
						<SectionAnchor href="/#kontak">Kontak</SectionAnchor>
						<NavItem to="/blog">Blog</NavItem>
						<Button
							asChild
							size="sm"
							className="ml-auto h-auto rounded-[1rem] bg-[#2f58e7] px-5 py-5 text-sm text-white hover:bg-[#244be0]"
						>
							<a href="/#kontak">Hubungi Kami</a>
						</Button>
					</nav>
				</div>
			</header>

			<main>{children}</main>

			<footer className="w-full border-t border-white/10 bg-[#0f2f97]">
				<div className="mx-auto flex w-full max-w-[1520px] flex-col gap-4 px-6 py-7 text-sm text-white/72 md:flex-row md:items-center md:justify-between lg:px-10 xl:px-14">
					<div className="space-y-1">
						<p className="font-medium text-white">PT Prima Kirana Spring</p>
						<p>Jl. Lingkar Utara UMK (timur Djarum Oasis), Kudus 59325</p>
					</div>
					<div className="flex flex-col gap-1 md:items-end">
						<p>prima.kirana.spring@gmail.com</p>
						<p>081-330-339-909</p>
					</div>
				</div>
			</footer>
		</div>
	);
}
