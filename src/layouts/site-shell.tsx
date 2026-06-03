import { Menu, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

function SectionAnchor({
	href,
	children,
	onClick,
}: {
	href: string;
	children: ReactNode;
	onClick?: () => void;
}) {
	return (
		<a
			href={href}
			onClick={onClick}
			className="rounded-[1.2rem] px-4 py-3 text-sm font-medium text-black transition-colors hover:text-primary sm:text-base"
		>
			{children}
		</a>
	);
}

function NavItem({
	to,
	children,
	end = false,
	onClick,
}: {
	to: string;
	children: ReactNode;
	end?: boolean;
	onClick?: () => void;
}) {
	return (
		<NavLink
			to={to}
			end={end}
			onClick={onClick}
			className={({ isActive }) =>
				[
					"rounded-[1.2rem] px-5 py-3 text-sm font-medium transition-colors sm:px-6 sm:text-base",
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
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const handleMobileContactClick = () => {
		closeMobileMenu();
		window.location.href = "/#kontak";
	};

	return (
		<div className="min-h-svh bg-[#d2d2d2] text-foreground">
			<header className="sticky top-0 z-20 bg-white/92 backdrop-blur-xl">
				<div className="mx-auto flex w-full max-w-[2048px] flex-col gap-4 px-4 py-4 sm:px-5 sm:py-5 lg:px-12 xl:px-14 2xl:px-16">
					<div className="flex items-center justify-between gap-4 sm:gap-6">
						<Link className="flex items-center gap-4" to="/" onClick={closeMobileMenu}>
							<div className="flex h-[3.75rem] w-[12.5rem] items-center sm:h-[4.4rem] sm:w-[15rem] md:h-[5.2rem] md:w-[21rem]">
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

						<button
							type="button"
							aria-label={isMobileMenuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
							aria-expanded={isMobileMenuOpen}
							aria-controls="mobile-navigation"
							onClick={() => setIsMobileMenuOpen((current) => !current)}
							className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-[#d9def7] bg-white text-[#2f58e7] shadow-[0_10px_24px_rgba(47,88,231,0.12)] transition-colors hover:bg-[#f5f7ff] xl:hidden"
						>
							{isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
						</button>
					</div>

					<nav
						id="mobile-navigation"
						className={[
							"overflow-hidden rounded-[1.5rem] border border-[#dfe4fb] bg-white/95 shadow-[0_18px_40px_rgba(47,88,231,0.08)] transition-all xl:hidden",
							isMobileMenuOpen
								? "max-h-[32rem] translate-y-0 opacity-100"
								: "pointer-events-none max-h-0 -translate-y-2 border-transparent opacity-0",
						].join(" ")}
					>
						<div className="grid grid-cols-1 gap-1 p-3 sm:grid-cols-2 sm:gap-2 sm:p-4">
							<NavItem to="/" end onClick={closeMobileMenu}>
							Home
							</NavItem>
							<SectionAnchor href="/#profil" onClick={closeMobileMenu}>
								Profil
							</SectionAnchor>
							<SectionAnchor href="/#produk" onClick={closeMobileMenu}>
								Produk
							</SectionAnchor>
							<SectionAnchor href="/#kontak" onClick={closeMobileMenu}>
								Kontak
							</SectionAnchor>
							<div className="sm:contents">
								<NavItem to="/blog" onClick={closeMobileMenu}>
									Blog
								</NavItem>
							</div>
							<Button
								size="sm"
								type="button"
								onClick={handleMobileContactClick}
								className="mt-2 h-auto w-full rounded-[1rem] bg-[#2f58e7] px-5 py-4 text-sm text-white hover:bg-[#244be0] sm:col-span-2 sm:mt-1"
							>
								Hubungi Kami
							</Button>
						</div>
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
