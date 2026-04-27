import { Factory, Target } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type CompanyValue,
	coreValues,
	missionPoints,
} from "@/data/company-profile";

function ValueCard({ icon: Icon, title, description }: CompanyValue) {
	return (
		<Card className="border-border/70 bg-background/80 shadow-sm shadow-primary/5">
			<CardHeader className="space-y-4">
				<div className="flex size-11 items-center justify-center rounded-2xl border border-accent/35 bg-accent/15 text-accent">
					<Icon className="size-5" />
				</div>
				<div className="space-y-2">
					<CardTitle className="text-lg">{title}</CardTitle>
					<CardDescription className="text-sm leading-7">{description}</CardDescription>
				</div>
			</CardHeader>
		</Card>
	);
}

export function CompanyProfileSection() {
	return (
		<section id="profil" className="mx-auto w-full max-w-screen-2xl px-6 py-16 lg:px-8 xl:px-10 2xl:px-12">
			<div className="grid gap-8 xl:grid-cols-12 xl:gap-10">
				<div className="xl:col-span-4">
				<p className="mb-3 text-sm font-medium tracking-[0.22em] text-primary uppercase">
					Profil Perusahaan
				</p>
				<h2 className="text-3xl font-semibold tracking-tight">
					Lebih dari tiga dekade berfokus pada manufaktur pegas yang presisi dan dapat diandalkan.
				</h2>
				</div>

				<div className="grid gap-6 xl:col-span-8 xl:grid-cols-8">
					<Card className="border-border/70 bg-background/85 shadow-sm shadow-primary/5 xl:col-span-5">
						<CardHeader className="space-y-4">
							<CardTitle className="text-2xl">Tentang PT Prima Kirana Spring</CardTitle>
						</CardHeader>
						<CardContent className="space-y-4 text-base leading-8 text-muted-foreground">
							<p>
								PT Prima Kirana Spring merupakan perusahaan manufaktur pegas yang berlokasi
								di Kudus, Jawa Tengah. Perusahaan ini berawal dari CV Prima Spring yang
								didirikan pada tahun 1995 oleh Bpk. Hudyono.
							</p>
							<p>
								Sebelum berdirinya Prima Spring, beliau telah merintis Prima Teknik yang
								bergerak di bidang penyediaan komponen logam untuk kebutuhan industri
								elektronika. Dalam perjalanannya, perusahaan terus beradaptasi hingga
								bertransformasi menjadi PT Prima Kirana Spring sebagai penguatan identitas dan
								komitmen terhadap pertumbuhan jangka panjang.
							</p>
							<p>
								Kini tongkat estafet kepemimpinan diteruskan oleh Stefani R. Hudyono untuk
								mengembangkan perusahaan ke arah yang lebih modern, inovatif, dan kompetitif,
								tanpa meninggalkan standar mutu yang telah dibangun selama bertahun-tahun.
							</p>
						</CardContent>
					</Card>

					<div className="grid gap-6 xl:col-span-3">
						<Card className="border-border/70 bg-card/80 shadow-sm shadow-primary/5">
							<CardHeader className="space-y-3">
								<div className="flex size-11 items-center justify-center rounded-2xl border border-accent/35 bg-accent/15 text-accent">
									<Target className="size-5" />
								</div>
								<CardTitle className="text-xl">Visi</CardTitle>
								<CardDescription className="text-sm leading-7">
									Menjadi perusahaan manufaktur pegas (spring) yang unggul, presisi, dan
									terpercaya di Indonesia.
								</CardDescription>
							</CardHeader>
						</Card>

						<Card className="border-border/70 bg-card/80 shadow-sm shadow-primary/5">
							<CardHeader className="space-y-3">
								<div className="flex size-11 items-center justify-center rounded-2xl border border-accent/35 bg-accent/15 text-accent">
									<Factory className="size-5" />
								</div>
								<CardTitle className="text-xl">Misi</CardTitle>
							</CardHeader>
							<CardContent>
								<ul className="space-y-3 text-sm leading-7 text-muted-foreground">
									{missionPoints.map((point) => (
										<li key={point} className="flex gap-3">
											<span className="mt-2 size-2 shrink-0 rounded-full bg-accent" />
											<span>{point}</span>
										</li>
									))}
								</ul>
							</CardContent>
						</Card>
					</div>
				</div>
			</div>

			<div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-4">
				{coreValues.map((item) => (
					<ValueCard key={item.title} {...item} />
				))}
			</div>
		</section>
	);
}
