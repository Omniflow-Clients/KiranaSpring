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
		<section className="w-full">
			<div className="overflow-hidden bg-[#3f5fe2] px-6 py-12 text-white md:px-10 lg:px-16 lg:py-16">
				<h2 className="text-center font-heading text-4xl font-light tracking-tight md:text-6xl">
					Jasa Galvanisasi
				</h2>

				<div className="mt-14 grid gap-6 md:grid-cols-3">
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
		</section>
	);
}
