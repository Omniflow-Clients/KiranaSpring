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
							<div className="flex h-18 w-18 items-center justify-center overflow-hidden rounded-[0.9rem] bg-[#2f58e7] shadow-lg shadow-[#2f58e7]/18">
								<svg
									aria-hidden="true"
									viewBox="0 0 80 80"
									className="h-14 w-14"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path
										d="M16 63C40 48 54 34 61 17"
										stroke="#fff"
										strokeWidth="3.2"
										strokeLinecap="round"
									/>
									<path
										d="M15 48C38 34 54 24 66 12"
										stroke="#fff"
										strokeWidth="3.2"
										strokeLinecap="round"
										opacity="0.9"
									/>
									<path
										d="M18 32C40 25 54 21 65 17"
										stroke="#fff"
										strokeWidth="3.2"
										strokeLinecap="round"
										opacity="0.8"
									/>
									<path
										d="M18 69C25 53 29 38 29 15"
										stroke="#ffd42f"
										strokeWidth="3.6"
										strokeLinecap="round"
									/>
									<path
										d="M18 20L22 11L26 20L35 24L26 28L22 37L18 28L9 24L18 20Z"
										fill="#ffd42f"
									/>
								</svg>
							</div>
							<div className="leading-none">
								<p className="text-[1.95rem] font-semibold tracking-tight text-[#1848d4] md:text-[2.35rem]">
									PT PRIMA <span className="text-[#f2a238]">KIRANA</span> SPRING
								</p>
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

			<footer className="border-t border-black/5 bg-white/70">
				<div className="mx-auto flex w-full max-w-screen-[2048px] flex-col gap-3 px-5 py-8 text-sm text-[#5f6781] md:flex-row md:items-center md:justify-between lg:px-12 xl:px-14 2xl:px-16">
					<p>
						PT Prima Kirana Spring • Jl. Lingkar Utara UMK (timur Djarum Oasis), Kudus 59325
					</p>
					<p>prima.kirana.spring@gmail.com • 081-330-339-909</p>
				</div>
			</footer>
		</div>
	);
}
