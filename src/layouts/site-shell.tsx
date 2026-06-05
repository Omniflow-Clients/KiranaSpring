import { Instagram, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
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
		<Link
			to={href}
			onClick={onClick}
			className="rounded-[1.2rem] px-4 py-3 text-sm font-medium text-black transition-colors hover:text-primary sm:text-base"
		>
			{children}
		</Link>
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
	const navigate = useNavigate();

	const closeMobileMenu = () => {
		setIsMobileMenuOpen(false);
	};

	const handleMobileContactClick = () => {
		closeMobileMenu();
		navigate("/#kontak");
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
								<Link to="/#kontak">Hubungi Kami</Link>
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

			<footer id="kontak" className="w-full scroll-mt-20 bg-[#2f58e7] sm:scroll-mt-24 xl:scroll-mt-28">
				<div className="mx-auto grid w-full max-w-[1680px] gap-8 px-5 py-10 text-white sm:px-6 md:px-8 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:px-12 lg:py-12 xl:px-16">
					<div className="flex justify-center lg:justify-start">
						<div className="rounded-[2rem] bg-white p-5 shadow-[0_22px_40px_rgba(17,34,101,0.16)]">
							<img
								src="/home-assets/navbar-logo.png"
								alt="PT Prima Kirana Spring"
								className="h-[5.6rem] w-auto object-contain sm:h-[6.5rem] md:h-[7.2rem]"
							/>
						</div>
					</div>

					<div className="space-y-2 text-center lg:text-left">
						<p className="text-[1.6rem] font-semibold tracking-tight text-white sm:text-[1.9rem]">
							PT Prima Kirana Spring
						</p>
						<p className="text-base leading-8 text-white/92 sm:text-lg">
							Jl. Lingkar Utara UMK (timur Djarum Oasis)
							<br />
							Kudus 59325
						</p>
						<p className="text-base leading-8 text-white/92 sm:text-lg">
							Telepon: 081-330-339-909
							<br />
							Email: prima.kirana.spring@gmail.com
						</p>
					</div>

					<div className="flex flex-col items-center gap-5 lg:items-end">
						<div className="rounded-[1.35rem] bg-white px-6 py-3 text-center shadow-[0_18px_36px_rgba(17,34,101,0.12)]">
							<p className="text-[1.25rem] font-semibold text-[#2f58e7] sm:text-[1.45rem]">
								Terhubung dengan kami
							</p>
						</div>

						<div className="flex flex-wrap items-center justify-center gap-4 text-white lg:justify-end">
							<a
								href="https://www.instagram.com/prima.kirana.spring"
								target="_blank"
								rel="noreferrer"
								aria-label="Instagram Prima Kirana Spring"
								className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-white/24 bg-white/8 transition-colors hover:bg-white/14"
							>
								<Instagram className="size-6" />
							</a>
							<a
								href="tel:081330339909"
								aria-label="Hubungi Prima Kirana Spring"
								className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-white/24 bg-white/8 transition-colors hover:bg-white/14"
							>
								<Phone className="size-6" />
							</a>
							<a
								href="https://maps.google.com/?q=Jl.%20Lingkar%20Utara%20UMK%20timur%20Djarum%20Oasis%20Kudus%2059325"
								target="_blank"
								rel="noreferrer"
								aria-label="Lokasi Prima Kirana Spring"
								className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-white/24 bg-white/8 transition-colors hover:bg-white/14"
							>
								<MapPin className="size-6" />
							</a>
							<a
								href="mailto:prima.kirana.spring@gmail.com"
								aria-label="Email Prima Kirana Spring"
								className="flex h-12 w-12 items-center justify-center rounded-[1rem] border border-white/24 bg-white/8 transition-colors hover:bg-white/14"
							>
								<Mail className="size-6" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
