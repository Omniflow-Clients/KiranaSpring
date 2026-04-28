import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { HeroHighlight } from "@/data/company-profile";
import { heroHighlights } from "@/data/company-profile";

function HighlightCard({ value, label }: HeroHighlight) {
	return (
		<Card className="border-primary/10 bg-background/80 shadow-sm shadow-primary/5">
			<CardContent className="p-6 text-center">
				<p className="text-2xl font-semibold text-foreground">{value}</p>
				<p className="mt-1 text-sm text-muted-foreground">{label}</p>
			</CardContent>
		</Card>
	);
}

export function HeroSection() {
	return (
		<section className="mx-auto w-full max-w-screen-2xl px-6 pt-10 pb-6 lg:px-8 xl:px-10 2xl:px-12 md:pt-16 md:pb-8">
			<div className="relative overflow-hidden rounded-[2rem] border border-primary/10 bg-card/92 p-8 shadow-xl shadow-primary/10 md:p-12 lg:p-16">
				<div className="pointer-events-none absolute -top-16 right-0 size-56 rounded-full bg-primary/10 blur-3xl" />
				<div className="pointer-events-none absolute bottom-0 left-0 size-48 rounded-full bg-accent/20 blur-3xl" />

				<div className="relative mx-auto max-w-4xl space-y-8 text-center">
					<Badge
						variant="outline"
						className="rounded-full border-accent/35 bg-accent/10 px-4 py-1 text-[0.7rem] tracking-[0.2em] text-accent-foreground uppercase"
					>
						PT Prima Kirana Spring &bull; Kudus, Jawa Tengah
					</Badge>

					<h1 className="text-4xl leading-tight font-semibold tracking-tight text-foreground md:text-5xl lg:text-6xl">
						Produsen pegas presisi dan custom manufacturing sejak 1995.
					</h1>

					<p className="mx-auto max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
						PT Prima Kirana Spring adalah perusahaan manufaktur pegas yang fokus
						pada produksi spring berkualitas tinggi dengan presisi, ketahanan,
						dan konsistensi yang terjaga untuk kebutuhan industri skala kecil
						hingga besar.
					</p>

					<div className="flex flex-wrap justify-center gap-3">
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
				</div>
			</div>

			<div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{heroHighlights.map((item) => (
					<HighlightCard key={item.value} {...item} />
				))}
			</div>
		</section>
	);
}
