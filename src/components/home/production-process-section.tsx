import { Ruler, ShieldCheck, Wrench } from "lucide-react";
import { Badge } from "@/components/ui/badge";
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
		<Card className="border-border/70 bg-card/80 shadow-sm shadow-primary/5">
			<CardHeader className="space-y-4">
				<div className="flex items-center justify-between gap-3">
					<Badge
						variant="outline"
						className="rounded-full border-accent/35 bg-accent/10 px-3 py-1 text-accent-foreground"
					>
						Tahap {step}
					</Badge>
					<Wrench className="size-5 text-primary" />
				</div>
				<div className="space-y-2">
					<CardTitle className="text-lg">{title}</CardTitle>
					<CardDescription className="text-sm leading-7">{description}</CardDescription>
				</div>
			</CardHeader>
		</Card>
	);
}

export function ProductionProcessSection() {
	return (
		<section className="border-y border-primary/10 bg-background/80">
			<div className="mx-auto grid w-full max-w-screen-2xl gap-8 px-6 py-16 lg:px-8 xl:grid-cols-12 xl:gap-10 xl:px-10 2xl:px-12">
				<div className="xl:col-span-4">
					<p className="mb-3 text-sm font-medium tracking-[0.22em] text-primary uppercase">
						Proses Produksi
					</p>
					<h2 className="text-3xl font-semibold tracking-tight">
						Alur kerja produksi kami dirancang untuk menjaga mutu dari awal material masuk
						hingga produk siap kirim.
					</h2>
				</div>

				<div className="grid gap-5 md:grid-cols-2 xl:col-span-8 xl:grid-cols-10">
					{productionStages.map((stage) => (
						<div key={stage.step} className="xl:col-span-2">
							<ProcessCard {...stage} />
						</div>
					))}
				</div>

				<div className="grid gap-6 xl:col-span-12 xl:grid-cols-12">
					<Card className="border-border/70 bg-primary text-primary-foreground shadow-xl shadow-primary/20 xl:col-span-5">
						<CardHeader className="space-y-3">
							<div className="flex size-11 items-center justify-center rounded-2xl border border-white/20 bg-white/10 text-white">
								<ShieldCheck className="size-5" />
							</div>
							<CardTitle className="text-2xl text-white">Komitmen Kami</CardTitle>
							<CardDescription className="text-sm leading-7 text-primary-foreground/80">
								Setiap produk melalui proses kontrol kualitas yang ketat untuk memastikan:
							</CardDescription>
						</CardHeader>
						<CardContent>
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

					<Card className="border-border/70 bg-card/80 shadow-sm shadow-primary/5 xl:col-span-7">
						<CardHeader className="space-y-3">
							<div className="flex size-11 items-center justify-center rounded-2xl border border-accent/35 bg-accent/15 text-accent">
								<Ruler className="size-5" />
							</div>
							<CardTitle className="text-2xl">Kualitas yang dapat diandalkan</CardTitle>
							<CardDescription className="text-sm leading-7">
								Kami memahami bahwa pegas merupakan komponen kecil dengan peran krusial
								dalam suatu sistem mekanis. Karena itu, kualitas produk dan pelayanan
								menjadi prioritas di setiap tahap pekerjaan.
							</CardDescription>
						</CardHeader>
						<CardContent className="space-y-4 text-sm leading-7 text-muted-foreground">
							<p>
								Pendekatan kami menekankan presisi dimensi, konsistensi elastisitas, dan
								ketahanan material agar setiap produk siap digunakan dalam aplikasi yang
								membutuhkan performa stabil.
							</p>
							<p>
								Dengan pengalaman panjang yang dipadukan semangat generasi baru, PT Prima
								Kirana Spring siap menjadi mitra terpercaya dalam penyediaan komponen pegas
								berkualitas tinggi bagi berbagai industri di Indonesia.
							</p>
						</CardContent>
					</Card>
				</div>
			</div>
		</section>
	);
}
