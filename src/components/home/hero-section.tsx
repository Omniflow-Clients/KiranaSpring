import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { HeroHighlight } from "@/data/company-profile";
import { heroHighlights } from "@/data/company-profile";

function HighlightCard({ value, label }: HeroHighlight) {
	return (
		<div className="rounded-[1.75rem] bg-white px-6 py-12 text-center shadow-[0_18px_40px_rgba(146,146,146,0.1)]">
			<p className="text-[1.7rem] leading-tight font-semibold text-[#1848d4] md:text-[2.1rem]">
				{value}
			</p>
			<p className="mx-auto mt-3 max-w-[15rem] text-[1.05rem] leading-[1.15] text-[#99a4d1] md:text-[1.15rem]">
				{label}
			</p>
		</div>
	);
}

export function HeroSection() {
	return (
		<section className="w-full">
			<div className="grid min-h-[calc(100svh-8.8rem)] grid-cols-1 overflow-hidden bg-[#d9d9d9] lg:grid-cols-[1.05fr_1.45fr]">
				<div className="relative isolate min-h-[28rem] overflow-hidden px-6 py-10 md:px-8 md:py-12 lg:min-h-[48rem] lg:px-12 lg:py-16">
					<img
						src="/home-assets/hero-background.jpg"
						alt="Mesin produksi pegas"
						className="absolute inset-0 h-full w-full object-cover grayscale"
					/>
					<div className="absolute inset-0 bg-[radial-gradient(circle_at_28%_30%,rgba(255,255,255,0.95),rgba(255,255,255,0.42)_36%,transparent_72%),linear-gradient(90deg,rgba(255,255,255,0.76),rgba(255,255,255,0.18)_52%,rgba(255,255,255,0.7)_100%)]" />
					<div className="absolute -left-8 bottom-6 h-48 w-48 rounded-full border-[18px] border-white/45" />
					<div className="absolute right-8 top-10 h-28 w-28 rounded-full border-[14px] border-white/35" />

					<div className="relative z-10 mx-auto flex h-full max-w-[44rem] items-start lg:items-center">
						<h1 className="max-w-[20ch] text-[2.45rem] leading-[0.96] font-semibold tracking-tight text-[#1848d4] md:text-[3.35rem] lg:text-[4.1rem] xl:text-[4.7rem]">
							Designed for you,
							<br />
							<span className="inline-block bg-[#ffd32c] px-3 py-1 font-semibold italic">
								PERFECTED
							</span>{" "}
							in every details.
						</h1>
					</div>
				</div>

				<div className="flex flex-col justify-between px-6 py-10 md:px-8 md:py-12 lg:px-12 lg:py-16 xl:px-18">
					<div className="grid gap-4 md:grid-cols-2 md:gap-5 xl:gap-6">
						{heroHighlights.map((item) => (
							<HighlightCard key={item.value} {...item} />
						))}
					</div>

					<div className="mt-8 flex flex-wrap justify-center gap-4 lg:mt-12">
						<Button
							asChild
							size="lg"
							className="h-auto rounded-[1.2rem] bg-[#8f8f8f] px-10 py-6 text-[1.05rem] font-medium text-white hover:bg-[#7d7d7d]"
						>
							<a href="#profil">Tentang Kami</a>
						</Button>
						<Button
							asChild
							size="lg"
							className="h-auto rounded-[1.2rem] bg-[#ffd32c] px-10 py-6 text-[1.05rem] font-medium text-[#1848d4] hover:bg-[#f1c61d]"
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
