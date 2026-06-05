import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { HeroHighlight } from "@/data/company-profile";
import { heroHighlights } from "@/data/company-profile";

function HighlightCard({ value, label }: HeroHighlight) {
	return (
		<div className="rounded-[1.5rem] border border-white/45 bg-white/82 px-5 py-8 text-center shadow-[0_18px_40px_rgba(146,146,146,0.1)] backdrop-blur-[6px] sm:px-6 sm:py-10 md:rounded-[1.75rem] md:py-12">
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
			<div className="relative isolate min-h-[calc(100svh-11rem)] overflow-hidden bg-[#d9d9d9] lg:min-h-[calc(100svh-8.8rem)]">
				<img
					src="/home-assets/hero-background.jpg"
					alt="Mesin produksi pegas"
					className="absolute inset-0 h-full w-full object-cover grayscale"
				/>
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_34%,rgba(255,255,255,0.88),rgba(255,255,255,0.48)_28%,transparent_56%),linear-gradient(90deg,rgba(255,255,255,0.84)_0%,rgba(255,255,255,0.38)_34%,rgba(255,255,255,0.16)_54%,rgba(255,255,255,0.58)_82%,rgba(255,255,255,0.78)_100%)]" />
				<div className="absolute inset-y-0 left-[44%] hidden w-[20rem] -translate-x-1/2 bg-[radial-gradient(circle,rgba(255,255,255,0.44),rgba(255,255,255,0.18)_48%,transparent_76%)] blur-3xl lg:block" />
				<div className="absolute -left-10 bottom-4 h-32 w-32 rounded-full border-[14px] border-white/45 sm:-left-8 sm:bottom-6 sm:h-48 sm:w-48 sm:border-[18px]" />
				<div className="absolute right-5 top-8 h-20 w-20 rounded-full border-[10px] border-white/35 sm:right-8 sm:top-10 sm:h-28 sm:w-28 sm:border-[14px]" />

				<div className="relative z-10 mx-auto grid min-h-[calc(100svh-11rem)] w-full max-w-[1680px] grid-cols-1 gap-8 px-5 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:min-h-[calc(100svh-8.8rem)] lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-12 lg:px-12 lg:py-16 xl:px-16">
					<div className="flex h-full items-center">
						<h1 className="max-w-[12ch] text-[2rem] leading-[0.98] font-semibold tracking-tight text-[#1848d4] sm:max-w-[14ch] sm:text-[2.45rem] md:max-w-[16ch] md:text-[3.35rem] lg:max-w-[13ch] lg:text-[4.1rem] xl:max-w-[11ch] xl:text-[4.7rem]">
							Designed for you,
							<br />
							<span className="inline-block bg-[#ffd32c] px-2 py-1 font-semibold italic sm:px-3">
								PERFECTED
							</span>{" "}
							in every details.
						</h1>
					</div>

					<div className="flex flex-col justify-center lg:justify-end">
						<div className="grid gap-4 md:grid-cols-2 md:gap-5 xl:gap-6">
							{heroHighlights.map((item) => (
								<HighlightCard key={item.value} {...item} />
							))}
						</div>

						<div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:mt-12 lg:justify-center">
							<Button
								asChild
								size="lg"
								className="h-auto w-full rounded-[1.2rem] bg-[#2f58e7] px-8 py-5 text-[1rem] font-medium text-white shadow-[0_18px_30px_rgba(47,88,231,0.2)] hover:bg-[#244be0] sm:w-auto sm:px-10 sm:py-6 sm:text-[1.05rem]"
							>
								<a href="#profil">Tentang Kami</a>
							</Button>
							<Button
								asChild
								size="lg"
								className="h-auto w-full rounded-[1.2rem] bg-[#ffd32c] px-8 py-5 text-[1rem] font-medium text-[#1848d4] shadow-[0_18px_30px_rgba(255,211,44,0.2)] hover:bg-[#f1c61d] sm:w-auto sm:px-10 sm:py-6 sm:text-[1.05rem]"
							>
								<a href="#produk">
									Lihat Produk <ArrowRight className="size-4" />
								</a>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
