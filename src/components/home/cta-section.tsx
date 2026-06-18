import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const promises = [
	{
		value: "30+ Tahun",
		label: "Pengalaman manufaktur pegas sejak 1995 untuk mitra industri.",
	},
	{
		value: "QC Ketat",
		label:
			"Menjaga presisi, elastisitas, dan ketahanan material di setiap tahap produksi.",
	},
	{
		value: "Custom Design",
		label: "Sesuai gambar, dimensi, dan spesifikasi yang Anda butuhkan.",
	},
] as const;

export function CtaSection() {
	return (
		<section className="w-full">
			<div className="overflow-hidden bg-[#d9d9d9] px-6 py-14 sm:px-8 md:px-12 lg:px-16 lg:py-20">
				<h2 className="text-center font-heading text-[2.2rem] leading-[1.08] font-semibold tracking-tight text-[#1848d4] sm:text-4xl md:text-5xl lg:text-6xl">
					Kenapa harus memilih kami?
				</h2>

				<div className="mx-auto mt-12 grid max-w-6xl gap-10 lg:grid-cols-[1fr_1.1fr] lg:items-center lg:gap-14">
					<div className="relative overflow-hidden rounded-[1.8rem] bg-white shadow-[0_22px_48px_rgba(141,141,141,0.14)]">
						<video
							src="/home-assets/why-us.mp4"
							controls
							poster="/home-assets/hero-background.jpg"
							className="aspect-[9/16] w-full object-cover sm:aspect-video"
						>
							<track kind="captions" />
						</video>
					</div>

					<div className="space-y-8">
						{promises.map((item) => (
							<div key={item.value} className="flex items-start gap-5">
								<div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#2f58e7] text-lg font-semibold text-white shadow-[0_12px_28px_rgba(47,88,231,0.22)] sm:h-14 sm:w-14 sm:text-xl">
									{promises.indexOf(item) + 1}
								</div>
								<div>
									<p className="text-[1.35rem] font-semibold text-[#1848d4] sm:text-[1.65rem]">
										{item.value}
									</p>
									<p className="mt-2 text-[0.98rem] leading-[1.6] text-[#5f6781] sm:text-[1.05rem]">
										{item.label}
									</p>
								</div>
							</div>
						))}

						<Button
							asChild
							size="lg"
							className="h-auto w-full rounded-[1.2rem] bg-[#ffd32c] px-10 py-6 text-[1.05rem] font-semibold text-[#1848d4] shadow-[0_18px_34px_rgba(255,211,44,0.28)] hover:bg-[#f1c61d] sm:w-auto"
						>
							<a href="#kontak">
								Hubungi Kami
								<ArrowRight className="size-5" />
							</a>
						</Button>
					</div>
				</div>
			</div>
		</section>
	);
}
