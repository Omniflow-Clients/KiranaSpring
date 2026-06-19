import { Droplets, Shield, Sparkles } from "lucide-react";

const galvanizingFeatures = [
	{
		title: "Proteksi Permukaan",
		description:
			"Lapisan galvanisasi membantu melindungi komponen logam dari korosi dan menjaga durabilitas pemakaian.",
		icon: Shield,
	},
	{
		title: "Finishing Rapi",
		description:
			"Penanganan permukaan dilakukan agar hasil akhir tampak lebih bersih, seragam, dan siap dipakai pada proses berikutnya.",
		icon: Sparkles,
	},
	{
		title: "Sesuai Kebutuhan",
		description:
			"Kami mendukung kebutuhan finishing komponen dalam skala produksi yang menuntut konsistensi dan kontrol kualitas.",
		icon: Droplets,
	},
] as const;

export function GalvanizingSection() {
	return (
		<section
			id="jasa"
			className="w-full scroll-mt-20 sm:scroll-mt-24 xl:scroll-mt-28"
		>
			<div className="overflow-hidden bg-[#3f5fe2] px-6 py-12 text-white md:px-10 lg:px-16 lg:py-16">
				<h2 className="text-center font-heading text-4xl font-light tracking-tight md:text-6xl">
					Jasa Galvanisasi
				</h2>

				<div className="mx-auto mt-10 grid max-w-6xl gap-8 lg:grid-cols-[1fr_1.1fr] lg:items-center">
					<img
						src="/home-assets/galvanizing.webp"
						alt="Jasa Galvanisasi"
						className="w-full rounded-[1.8rem] shadow-[0_18px_40px_rgba(20,35,111,0.20)] lg:max-h-[28rem] lg:object-cover"
					/>

					<div className="grid gap-6">
						{galvanizingFeatures.map((item) => {
							const Icon = item.icon;
							return (
								<div
									key={item.title}
									className="rounded-[1.8rem] bg-white/12 p-7 shadow-[0_18px_40px_rgba(20,35,111,0.18)] backdrop-blur-sm"
								>
									<div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/14">
										<Icon className="size-7 text-[#ffd54a]" />
									</div>
									<h3 className="mt-6 text-2xl font-semibold">{item.title}</h3>
									<p className="mt-4 text-base leading-8 text-white/86">
										{item.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
