import { Ruler, ShieldCheck } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ProductionStage,
	productionStages,
	qualityCommitments,
} from "@/data/company-profile";

function ProcessCard({ step, title, description }: ProductionStage) {
	return (
		<Card className="border-border/70 bg-card/80 p-6 shadow-sm shadow-primary/5 transition-transform duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10">
			<CardHeader className="space-y-2">
				<p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">
					Tahap {step}
				</p>
				<CardTitle className="font-heading text-lg">{title}</CardTitle>
				<CardDescription className="text-sm leading-7">
					{description}
				</CardDescription>
			</CardHeader>
		</Card>
	);
}

export function ProductionProcessSection() {
	const firstRowStages = productionStages.slice(0, 3);
	const secondRowStages = productionStages.slice(3);

	return (
		<section className="border-y border-primary/10 bg-muted/75">
			<div className="mx-auto w-full max-w-screen-2xl px-6 py-28 lg:px-8 xl:px-10 2xl:px-12">
				<div className="mx-auto mb-14 max-w-2xl text-center">
					<p className="mb-3 text-sm font-medium tracking-[0.22em] text-primary uppercase">
						Proses Produksi
					</p>
					<h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
						Alur kerja produksi kami dirancang untuk menjaga mutu dari awal
						material masuk hingga produk siap kirim.
					</h2>
				</div>

				<div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{firstRowStages.map((stage) => (
						<ProcessCard key={stage.step} {...stage} />
					))}
				</div>

				<div className="mx-auto mt-6 grid max-w-3xl gap-6 sm:grid-cols-2">
					{secondRowStages.map((stage) => (
						<ProcessCard key={stage.step} {...stage} />
					))}
				</div>

				<div className="mx-auto mt-8 grid max-w-5xl gap-6 md:grid-cols-2">
					<Card className="border-border/70 bg-primary text-primary-foreground shadow-xl shadow-primary/20">
						<CardHeader className="space-y-3 p-8">
							<div className="flex size-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white">
								<ShieldCheck className="size-5" />
							</div>
							<CardTitle className="font-heading text-2xl text-white">
								Komitmen Kami
							</CardTitle>
							<CardDescription className="text-sm leading-7 text-primary-foreground/80">
								Setiap produk melalui proses kontrol kualitas yang ketat untuk
								memastikan:
							</CardDescription>
						</CardHeader>
						<CardContent className="px-8 pb-8">
							<ul className="space-y-3 text-base font-medium text-white">
								{qualityCommitments.map((item) => (
									<li key={item} className="flex gap-3">
										<span className="mt-2 size-2 shrink-0 rounded-full bg-accent" />
										<span>{item}</span>
									</li>
								))}
							</ul>
						</CardContent>
					</Card>

					<Card className="border-border/70 bg-card/80 shadow-sm shadow-primary/5">
						<CardHeader className="space-y-3 p-8">
							<div className="flex size-11 items-center justify-center rounded-2xl border border-accent/35 bg-accent/15 text-accent">
								<Ruler className="size-5" />
							</div>
							<CardTitle className="font-heading text-2xl">
								Kualitas yang dapat diandalkan
							</CardTitle>
							<CardDescription className="text-sm leading-7">
								Kami memahami bahwa pegas merupakan komponen kecil dengan peran
								krusial dalam suatu sistem mekanis. Karena itu, kualitas produk
								dan pelayanan menjadi prioritas di setiap tahap pekerjaan.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4 px-8 pb-8 text-sm leading-7 text-muted-foreground">
							<p>
								Pendekatan kami menekankan presisi dimensi, konsistensi
								elastisitas, dan ketahanan material agar setiap produk siap
								digunakan dalam aplikasi yang membutuhkan performa stabil.
							</p>
							<p>
								Dengan pengalaman panjang yang dipadukan semangat generasi baru,
								PT Prima Kirana Spring siap menjadi mitra terpercaya dalam
								penyediaan komponen pegas berkualitas tinggi bagi berbagai
								industri di Indonesia.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
