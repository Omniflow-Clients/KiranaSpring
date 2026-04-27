import { ArrowRight, Factory } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
	type HeroHighlight,
	type IconComponent,
	heroHighlights,
} from "@/data/company-profile";

function HighlightCard({
	icon: Icon,
	value,
	label,
}: HeroHighlight) {
	return (
		<Card className="border-primary/10 bg-background/80 shadow-sm shadow-primary/5">
			<CardContent className="flex items-start gap-4 p-5">
				<div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-accent/35 bg-accent/15 text-accent">
					<Icon className="size-5" />
				</div>
				<div className="space-y-1">
					<p className="text-lg font-semibold text-foreground">{value}</p>
					<p className="text-sm leading-6 text-muted-foreground">{label}</p>
				</div>
			</CardContent>
		</Card>
	);
}

function DirectorNote({
	icon: Icon,
	body,
}: {
	icon: IconComponent;
	body: string;
}) {
	return (
		<div className="flex items-start gap-3">
			<Icon className="mt-0.5 size-4 text-primary" />
			<p>{body}</p>
		</div>
	);
}

export function HeroSection() {
	return (
		<section className="mx-auto w-full max-w-screen-2xl px-6 py-10 lg:px-8 xl:px-10 2xl:px-12 md:py-16">
			<div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-card/92 p-8 shadow-xl shadow-primary/10 md:p-10">
				<div className="pointer-events-none absolute -top-16 right-0 size-56 rounded-full bg-primary/10 blur-3xl" />
				<div className="pointer-events-none absolute bottom-0 left-0 size-48 rounded-full bg-accent/20 blur-3xl" />

				<div className="relative grid gap-10 xl:grid-cols-12 xl:gap-8 xl:items-start">
					<div className="space-y-8 xl:col-span-7">
						<Badge
							variant="outline"
							className="rounded-full border-accent/35 bg-accent/10 px-4 py-1 text-[0.7rem] tracking-[0.2em] text-accent-foreground uppercase"
						>
							PT Prima Kirana Spring • Kudus, Jawa Tengah
						</Badge>

						<div className="space-y-5">
							<h1 className="max-w-5xl text-4xl leading-tight font-semibold tracking-tight text-foreground md:text-6xl">
								Produsen pegas presisi dan custom manufacturing sejak 1995.
							</h1>
							<p className="max-w-4xl text-base leading-8 text-muted-foreground md:text-lg">
								PT Prima Kirana Spring adalah perusahaan manufaktur pegas yang fokus pada
								produksi spring berkualitas tinggi dengan presisi, ketahanan, dan
								konsistensi yang terjaga untuk kebutuhan industri skala kecil hingga besar.
							</p>
						</div>

						<div className="flex flex-wrap gap-3">
							<Button asChild size="lg">
								<a href="#produk">
									Lihat Produk
									<ArrowRight className="size-4" />
								</a>
							</Button>
							<Button
								asChild
								variant="outline"
								size="lg"
								className="border-primary/15 bg-background/80"
							>
								<a href="#kontak">Diskusikan Kebutuhan</a>
							</Button>
						</div>

						<div className="grid gap-3 sm:grid-cols-2 2xl:grid-cols-4">
							{heroHighlights.map((item) => (
								<HighlightCard key={item.value} {...item} />
							))}
						</div>
					</div>

					<div className="grid gap-4 xl:col-span-5 xl:self-stretch">
						<Card className="border-primary/10 bg-background/88 shadow-xl shadow-primary/10">
							<div className="space-y-4 p-6 text-sm leading-7 text-muted-foreground">
								<Badge variant="secondary" className="rounded-full px-3 py-1">
									Sambutan Direktur
								</Badge>
								<div className="space-y-3">
									<h2 className="text-2xl font-semibold text-foreground">
										Komitmen pada setiap detail pekerjaan.
									</h2>
									<p>
										Kami menghadirkan solusi profesional, unggul, dan dapat diandalkan
										untuk menjalin kemitraan jangka panjang bersama pelanggan.
									</p>
								</div>
								<div className="rounded-2xl border border-primary/10 bg-muted/70 p-4">
									<div className="space-y-3">
										<DirectorNote
											icon={Factory}
											body="Sejak tahun 1995, kami membangun reputasi sebagai perusahaan manufaktur yang fokus pada produksi spring berkualitas tinggi."
										/>
										<DirectorNote
											icon={ArrowRight}
											body="Presisi, ketahanan, dan konsistensi menjadi dasar dalam menjaga mutu produk dan pelayanan."
										/>
									</div>
								</div>
								<p className="font-medium text-foreground">
									Stefani R. Hudyono • Director
								</p>
							</div>
						</Card>

						<Card className="border-primary/10 bg-primary text-primary-foreground shadow-xl shadow-primary/20">
							<div className="space-y-3 p-6 text-sm leading-7 text-primary-foreground/80">
								<Badge
									variant="outline"
									className="w-fit rounded-full border-white/20 bg-white/10 px-3 py-1 text-white"
								>
									Designed for You
								</Badge>
								<h2 className="text-2xl font-semibold text-white">
									Perfected in every detail.
								</h2>
								<p>
									Dari incoming QC hingga final packing, setiap tahap produksi kami disusun
									untuk menjaga kualitas produk dan kepercayaan pelanggan.
								</p>
								<p>
									Kami siap menangani kebutuhan standard part maupun custom spring
									berdasarkan desain dan spesifikasi teknis yang Anda butuhkan.
								</p>
							</div>
						</Card>
					</div>
				</div>
			</div>
		</section>
	);
}
