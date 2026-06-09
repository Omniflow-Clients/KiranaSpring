import { Instagram, Mail, MapPin, Menu, Phone, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const trackedSectionIds = ["profil", "produk", "kontak"] as const;
type ActiveSection = "home" | (typeof trackedSectionIds)[number];

function TikTokIcon({ className = "size-6" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
			className={className}
		>
			<path d="M19.59 6.69A4.83 4.83 0 0 1 16 5.13V16a6 6 0 1 1-6-6c.2 0 .39.02.58.05v3.03a3 3 0 1 0 2.42 2.95V2h3.01a4.85 4.85 0 0 0 4.58 4.58v3.11Z" />
		</svg>
	);
}

function WhatsAppIcon({ className = "size-6" }: { className?: string }) {
	return (
		<svg
			viewBox="0 0 24 24"
			fill="currentColor"
			aria-hidden="true"
			className={className}
		>
			<path d="M19.05 4.94A9.9 9.9 0 0 0 12 2a9.94 9.94 0 0 0-8.6 14.92L2 22l5.23-1.37A9.94 9.94 0 1 0 19.05 4.94Zm-7.05 14a7.94 7.94 0 0 1-4.04-1.1l-.29-.17-3.1.81.83-3.02-.19-.31A7.94 7.94 0 1 1 12 18.94Zm4.35-5.96c-.24-.12-1.4-.69-1.62-.77-.22-.08-.37-.12-.53.12-.16.24-.61.77-.75.93-.14.16-.27.18-.51.06-.24-.12-1-.37-1.91-1.18-.71-.63-1.18-1.41-1.32-1.65-.14-.24-.01-.37.1-.49.1-.1.24-.27.35-.41.12-.14.16-.24.24-.39.08-.16.04-.29-.02-.41-.06-.12-.53-1.28-.73-1.75-.19-.46-.39-.39-.53-.39h-.45c-.16 0-.41.06-.63.29-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.69 2.58 4.1 3.62.57.25 1.02.4 1.37.51.58.18 1.11.16 1.53.1.47-.07 1.4-.57 1.6-1.13.2-.55.2-1.02.14-1.12-.06-.1-.22-.16-.45-.27Z" />
		</svg>
	);
}

function SectionAnchor({
	href,
	children,
	onClick,
	isActive = false,
}: {
	href: string;
	children: ReactNode;
	onClick?: () => void;
	isActive?: boolean;
}) {
	return (
		<Link
			to={href}
			onClick={onClick}
			className={[
				"rounded-[1.2rem] px-4 py-3 text-sm font-medium transition-colors sm:text-base",
				isActive ? "bg-[#c5c5c5] text-white" : "text-black hover:text-primary",
			].join(" ")}
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
	isActiveOverride,
}: {
	to: string;
	children: ReactNode;
	end?: boolean;
	onClick?: () => void;
	isActiveOverride?: boolean;
}) {
	return (
		<NavLink
			to={to}
			end={end}
			onClick={onClick}
			className={({ isActive }) =>
				[
					"rounded-[1.2rem] px-5 py-3 text-sm font-medium transition-colors sm:px-6 sm:text-base",
					(isActiveOverride ?? isActive)
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
	const [activeSection, setActiveSection] = useState<ActiveSection>("home");
	const location = useLocation();
	const { hash, pathname } = location;
	const navigate = useNavigate();

	useEffect(() => {
		if (pathname !== "/") {
			return;
		}

		const updateActiveSection = () => {
			const activationLine = window.scrollY + window.innerHeight * 0.38;
			let currentSection: ActiveSection = "home";

			for (const sectionId of trackedSectionIds) {
				const section = document.getElementById(sectionId);
				if (section && section.offsetTop <= activationLine) {
					currentSection = sectionId;
				}
			}

			setActiveSection(currentSection);
		};

		updateActiveSection();
		const animationFrame = hash ? window.requestAnimationFrame(updateActiveSection) : null;
		window.addEventListener("scroll", updateActiveSection, { passive: true });
		window.addEventListener("resize", updateActiveSection);

		return () => {
			if (animationFrame) {
				window.cancelAnimationFrame(animationFrame);
			}
			window.removeEventListener("scroll", updateActiveSection);
			window.removeEventListener("resize", updateActiveSection);
		};
	}, [pathname, hash]);

	const isHomePage = pathname === "/";

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
							<NavItem to="/" end isActiveOverride={isHomePage && activeSection === "home"}>
								Home
							</NavItem>
							<SectionAnchor href="/#profil" isActive={isHomePage && activeSection === "profil"}>
								Profil
							</SectionAnchor>
							<SectionAnchor href="/#produk" isActive={isHomePage && activeSection === "produk"}>
								Produk
							</SectionAnchor>
							<SectionAnchor href="/#kontak" isActive={isHomePage && activeSection === "kontak"}>
								Kontak
							</SectionAnchor>
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
							<NavItem
								to="/"
								end
								onClick={closeMobileMenu}
								isActiveOverride={isHomePage && activeSection === "home"}
							>
								Home
							</NavItem>
							<SectionAnchor
								href="/#profil"
								onClick={closeMobileMenu}
								isActive={isHomePage && activeSection === "profil"}
							>
								Profil
							</SectionAnchor>
							<SectionAnchor
								href="/#produk"
								onClick={closeMobileMenu}
								isActive={isHomePage && activeSection === "produk"}
							>
								Produk
							</SectionAnchor>
							<SectionAnchor
								href="/#kontak"
								onClick={closeMobileMenu}
								isActive={isHomePage && activeSection === "kontak"}
							>
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
						<p className="text-[1.45rem] font-semibold tracking-tight text-white sm:text-[1.6rem] md:text-[1.9rem]">
							PT Prima Kirana Spring
						</p>
						<p className="text-[0.98rem] leading-7 text-white/92 sm:text-base md:text-lg">
							Jl. Lingkar Utara UMK (timur Djarum Oasis)
							<br />
							Kudus 59325
						</p>
						<p className="text-[0.98rem] leading-7 text-white/92 sm:text-base md:text-lg">
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

						<div className="grid w-full max-w-[22rem] grid-cols-3 gap-3 text-white sm:max-w-[26rem] sm:grid-cols-6 lg:max-w-none lg:auto-cols-max lg:grid-flow-col lg:justify-end">
							<a
								href="https://www.tiktok.com/@prima.kirana.spring"
								target="_blank"
								rel="noreferrer"
								aria-label="TikTok Prima Kirana Spring"
								className="flex h-12 w-full items-center justify-center rounded-[1rem] border border-white/24 bg-white/8 transition-colors hover:bg-white/14"
							>
								<TikTokIcon className="size-6" />
							</a>
							<a
								href="https://www.instagram.com/prima.kirana.spring"
								target="_blank"
								rel="noreferrer"
								aria-label="Instagram Prima Kirana Spring"
								className="flex h-12 w-full items-center justify-center rounded-[1rem] border border-white/24 bg-white/8 transition-colors hover:bg-white/14"
							>
								<Instagram className="size-6" />
							</a>
							<a
								href="tel:081330339909"
								aria-label="Hubungi Prima Kirana Spring"
								className="flex h-12 w-full items-center justify-center rounded-[1rem] border border-white/24 bg-white/8 transition-colors hover:bg-white/14"
							>
								<Phone className="size-6" />
							</a>
							<a
								href="https://maps.google.com/?q=Jl.%20Lingkar%20Utara%20UMK%20timur%20Djarum%20Oasis%20Kudus%2059325"
								target="_blank"
								rel="noreferrer"
								aria-label="Lokasi Prima Kirana Spring"
								className="flex h-12 w-full items-center justify-center rounded-[1rem] border border-white/24 bg-white/8 transition-colors hover:bg-white/14"
							>
								<MapPin className="size-6" />
							</a>
							<a
								href="mailto:prima.kirana.spring@gmail.com"
								aria-label="Email Prima Kirana Spring"
								className="flex h-12 w-full items-center justify-center rounded-[1rem] border border-white/24 bg-white/8 transition-colors hover:bg-white/14"
							>
								<Mail className="size-6" />
							</a>
							<a
								href="https://wa.me/6281330339909"
								target="_blank"
								rel="noreferrer"
								aria-label="WhatsApp Prima Kirana Spring"
								className="flex h-12 w-full items-center justify-center rounded-[1rem] border border-white/24 bg-white/8 transition-colors hover:bg-white/14"
							>
								<WhatsAppIcon className="size-6" />
							</a>
						</div>
					</div>
				</div>
			</footer>
		</div>
	);
}
