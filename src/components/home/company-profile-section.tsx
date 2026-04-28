import { ArrowRight, Factory, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
	type CompanyValue,
	type IconComponent,
	coreValues,
	missionPoints,
} from "@/data/company-profile";

function ValuePill({ icon: Icon, title, description }: CompanyValue) {
	return (
		<div className="rounded-[28px] border border-border/70 bg-background/82 p-6 shadow-sm shadow-primary/5">
			<div className="flex items-start gap-4">
				<div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-accent/35 bg-accent/15 text-accent">
					<Icon className="size-5" />
				</div>
				<div className="space-y-1">
					<h3 className="font-heading text-lg text-foreground">{title}</h3>
					<p className="text-sm leading-7 text-muted-foreground">
						{description}
					</p>
				</div>
			</div>
		</div>
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
			<Icon className="mt-0.5 size-4 shrink-0 text-primary" />
			<p className="text-sm leading-7 text-muted-foreground">{body}</p>
		</div>
	);
}

export function CompanyProfileSection() {
	return (
		<section
			id="profil"
			className="mx-auto w-full max-w-screen-2xl px-6 py-28 lg:px-8 xl:px-10 2xl:px-12"
		>
			<div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-end">
				<div className="max-w-xl">
					<p className="mb-3 text-sm font-medium tracking-[0.22em] text-primary uppercase">
						Profil Perusahaan
					</p>
					<h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl xl:text-5xl">
						Lebih dari tiga dekade berfokus pada manufaktur pegas yang presisi dan
						dapat diandalkan.
					</h2>
				</div>

				<div className="max-w-2xl space-y-4 text-base leading-8 text-muted-foreground">
					<p>
						PT Prima Kirana Spring tumbuh dari pengalaman panjang di industri
						komponen logam, lalu berkembang menjadi manufaktur spring yang lebih
						modern, presisi, dan siap mengikuti kebutuhan produksi pelanggan.
					</p>
					<p>
						Fokus kami bukan sekadar menghasilkan produk, tetapi membangun sistem
						kerja yang rapi dari material masuk hingga pengiriman akhir agar mutu
						tetap konsisten pada setiap batch.
					</p>
				</div>
			</div>

			<div className="mt-16 overflow-hidden rounded-[36px] border border-primary/10 bg-background/88 shadow-[0_24px_70px_-40px_rgba(41,70,189,0.35)]">
				<div className="grid gap-0 xl:grid-cols-[1.2fr_0.8fr]">
					<div className="space-y-8 p-8 md:p-10 xl:p-12">
						<div className="flex flex-wrap gap-3">
							<Badge variant="secondary" className="rounded-full px-3 py-1">
								Sejak 1995
							</Badge>
							<Badge variant="secondary" className="rounded-full px-3 py-1">
								Kudus, Jawa Tengah
							</Badge>
							<Badge variant="secondary" className="rounded-full px-3 py-1">
								Spring Manufacturing
							</Badge>
						</div>

						<div className="max-w-3xl space-y-5">
							<h3 className="font-heading text-2xl font-semibold text-foreground md:text-3xl">
								Dari fondasi manufaktur lokal menuju partner produksi yang lebih
								modern dan kompetitif.
							</h3>
							<div className="space-y-4 text-sm leading-8 text-muted-foreground md:text-base">
								<p>
									PT Prima Kirana Spring berawal dari CV Prima Spring yang
									didirikan pada tahun 1995 oleh Bpk. Hudyono. Sebelumnya, beliau
									juga merintis Prima Teknik sebagai penyedia komponen logam untuk
									kebutuhan industri elektronika.
								</p>
								<p>
									Perjalanan tersebut membentuk pemahaman yang kuat terhadap
									presisi produksi, kebutuhan industri, dan pentingnya kualitas
									yang konsisten dalam skala manufaktur.
								</p>
								<p>
									Kini perusahaan dipimpin oleh Stefani R. Hudyono dengan arah
									pengembangan yang lebih modern, inovatif, dan kompetitif, tanpa
									melepas standar mutu yang telah dibangun selama bertahun-tahun.
								</p>
							</div>
						</div>
					</div>

					<div className="border-t border-primary/10 bg-muted/60 p-8 md:p-10 xl:border-t-0 xl:border-l xl:p-12">
						<div className="space-y-6">
							<div className="space-y-3">
								<div className="flex size-12 items-center justify-center rounded-2xl border border-accent/35 bg-accent/15 text-accent">
									<Target className="size-5" />
								</div>
								<p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">
									Visi
								</p>
								<p className="font-heading text-xl leading-8 text-foreground">
									Menjadi perusahaan manufaktur pegas yang unggul, presisi, dan
									terpercaya di Indonesia.
								</p>
							</div>

							<div className="h-px bg-border/70" />

							<div className="space-y-4">
								<div className="flex size-12 items-center justify-center rounded-2xl border border-accent/35 bg-accent/15 text-accent">
									<Factory className="size-5" />
								</div>
								<p className="text-xs font-medium tracking-[0.22em] text-accent uppercase">
									Misi
								</p>
								<ul className="space-y-3 text-sm leading-7 text-muted-foreground">
									{missionPoints.map((point) => (
										<li key={point} className="flex gap-3">
											<span className="mt-2 size-2 shrink-0 rounded-full bg-accent" />
											<span>{point}</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-10 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
				<div className="rounded-[32px] border border-border/70 bg-background/86 p-8 shadow-sm shadow-primary/5 md:p-10">
					<div className="space-y-5">
						<Badge variant="secondary" className="rounded-full px-3 py-1">
							Sambutan Direktur
						</Badge>
						<div className="space-y-3">
							<h3 className="font-heading text-2xl font-semibold text-foreground">
								Komitmen pada setiap detail pekerjaan.
							</h3>
							<p className="text-sm leading-7 text-muted-foreground">
								Kami menghadirkan solusi profesional, unggul, dan dapat
								diandalkan untuk membangun kemitraan jangka panjang bersama
								pelanggan.
							</p>
						</div>
						<div className="space-y-4 rounded-[28px] border border-primary/10 bg-muted/65 p-6">
							<DirectorNote
								icon={Factory}
								body="Sejak tahun 1995, kami membangun reputasi sebagai perusahaan manufaktur yang fokus pada produksi spring berkualitas tinggi."
							/>
							<DirectorNote
								icon={ArrowRight}
								body="Presisi, ketahanan, dan konsistensi menjadi dasar dalam menjaga mutu produk sekaligus standar pelayanan kami."
							/>
						</div>
						<p className="font-medium text-foreground">
							Stefani R. Hudyono &bull; Director
						</p>
					</div>
				</div>

				<div className="rounded-[32px] border border-primary/10 bg-primary p-8 text-primary-foreground shadow-xl shadow-primary/20 md:p-10">
					<div className="flex h-full flex-col justify-between gap-8">
						<div className="space-y-4">
							<Badge
								variant="outline"
								className="w-fit rounded-full border-white/20 bg-white/10 px-3 py-1 text-white"
							>
								Designed for You
							</Badge>
							<h3 className="font-heading text-2xl font-semibold text-white md:text-3xl">
								Perfected in every detail.
							</h3>
							<div className="space-y-4 text-sm leading-7 text-primary-foreground/85">
								<p>
									Dari incoming QC hingga final packing, setiap tahap produksi
									disusun untuk menjaga kualitas produk dan kepercayaan
									pelanggan.
								</p>
								<p>
									Kami siap menangani kebutuhan standard part maupun custom spring
									berdasarkan design dan spesifikasi teknis yang Anda butuhkan.
								</p>
							</div>
						</div>

						<div className="grid gap-3 sm:grid-cols-2">
							<div className="rounded-2xl border border-white/15 bg-white/10 p-4">
								<p className="text-xs font-medium tracking-[0.18em] text-white/70 uppercase">
									Fokus
								</p>
								<p className="mt-2 text-sm font-medium text-white">
									Presisi dimensi dan konsistensi performa
								</p>
							</div>
							<div className="rounded-2xl border border-white/15 bg-white/10 p-4">
								<p className="text-xs font-medium tracking-[0.18em] text-white/70 uppercase">
									Fleksibilitas
								</p>
								<p className="mt-2 text-sm font-medium text-white">
									Support untuk kebutuhan custom manufacturing
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mt-10 grid gap-4 xl:grid-cols-4">
				{coreValues.map((item) => (
					<ValuePill key={item.title} {...item} />
				))}
			</div>
		</section>
	);
}
