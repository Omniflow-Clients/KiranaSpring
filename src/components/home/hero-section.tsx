import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { HeroHighlight } from "@/data/company-profile";
import { heroHighlights } from "@/data/company-profile";

function HighlightCard({ value, label }: HeroHighlight) {
	return (
		<div className="rounded-[1.5rem] bg-white px-5 py-8 text-center shadow-[0_18px_40px_rgba(146,146,146,0.1)] sm:px-6 sm:py-10 md:rounded-[1.75rem] md:py-12">
			<p className="text-[1.45rem] leading-tight font-semibold text-[#1848d4] sm:text-[1.6rem] md:text-[2.1rem]">
				{value}
			</p>
			<p className="mx-auto mt-3 max-w-[15rem] text-[0.95rem] leading-[1.2] text-[#99a4d1] sm:text-[1rem] md:text-[1.15rem]">
				{label}
			</p>
		</div>
	);
}

export function HeroSection() {
	return (
		<section className="w-full">
			<div className="grid min-h-[calc(100svh-11rem)] grid-cols-1 overflow-hidden bg-[#d9d9d9] lg:min-h-[calc(100svh-8.8rem)] lg:grid-cols-[1.05fr_1.45fr]">
				<div className="relative isolate min-h-[24rem] overflow-hidden px-5 py-8 sm:min-h-[28rem] sm:px-6 sm:py-10 md:px-8 md:py-12 lg:min-h-[48rem] lg:px-12 lg:py-16">
					<img
						src="/home-assets/hero-background.jpg"
						alt="Mesin produksi pegas"
						className="absolute inset-0 h-full w-full object-cover grayscale"
					/>
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_30%,rgba(255,255,255,0.95),rgba(255,255,255,0.42)_36%,transparent_72%),linear-gradient(90deg,rgba(255,255,255,0.76),rgba(255,255,255,0.18)_52%,rgba(255,255,255,0.7)_100%)]" />
					<div className="absolute -left-10 bottom-4 h-32 w-32 rounded-full border-[14px] border-white/45 sm:-left-8 sm:bottom-6 sm:h-48 sm:w-48 sm:border-[18px]" />
					<div className="absolute right-5 top-8 h-20 w-20 rounded-full border-[10px] border-white/35 sm:right-8 sm:top-10 sm:h-28 sm:w-28 sm:border-[14px]" />

					<div className="relative z-10 mx-auto flex h-full max-w-[44rem] items-start lg:items-center">
						<h1 className="max-w-[12ch] text-[2rem] leading-[0.98] font-semibold tracking-tight text-[#1848d4] sm:max-w-[14ch] sm:text-[2.45rem] md:max-w-[20ch] md:text-[3.35rem] lg:text-[4.1rem] xl:text-[4.7rem]">
							Designed for you,
							<br />
							<span className="inline-block bg-[#ffd32c] px-2 py-1 font-semibold italic sm:px-3">
								PERFECTED
							</span>{" "}
							in every details.
						</h1>
					</div>
				</div>

				<div className="flex flex-col justify-between px-5 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-18">
					<div className="grid gap-4 md:grid-cols-2 md:gap-5 xl:gap-6">
						{heroHighlights.map((item) => (
							<HighlightCard key={item.value} {...item} />
						))}
					</div>

					<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:mt-12">
						<Button
							asChild
							size="lg"
							className="h-auto w-full rounded-[1.2rem] bg-[#8f8f8f] px-8 py-5 text-[1rem] font-medium text-white hover:bg-[#7d7d7d] sm:w-auto sm:px-10 sm:py-6 sm:text-[1.05rem]"
						>
							<a href="#profil">Tentang Kami</a>
						</Button>
						<Button
							asChild
							size="lg"
							className="h-auto w-full rounded-[1.2rem] bg-[#ffd32c] px-8 py-5 text-[1rem] font-medium text-[#1848d4] hover:bg-[#f1c61d] sm:w-auto sm:px-10 sm:py-6 sm:text-[1.05rem]"
						>
							<a href="#produk">
								Lihat Produk <ArrowRight className="size-4" />
							</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
