import { PackageCheck } from "lucide-react";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	type ContactChannel,
	type IconComponent,
	contactChannels,
	socialChannels,
} from "@/data/company-profile";

function ContactCard({ icon: Icon, label, value, href }: ContactChannel) {
	const content = (
		<Card className="border-white/15 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/14">
			<CardContent className="flex items-start gap-4 p-5">
				<div className="flex size-11 shrink-0 items-center justify-center rounded-2xl border border-accent/35 bg-accent/15 text-accent">
					<Icon className="size-5" />
				</div>
				<div className="space-y-1">
					<p className="text-sm font-medium uppercase tracking-[0.18em] text-primary-foreground/65">
						{label}
					</p>
					<p className="text-base leading-7 text-white">{value}</p>
				</div>
			</CardContent>
		</Card>
	);

	if (!href) {
		return content;
	}

	return (
		<a
			href={href}
			rel="noreferrer"
			target={href.startsWith("http") ? "_blank" : undefined}
		>
			{content}
		</a>
	);
}

function InquiryScope({
	icon: Icon,
	title,
	description,
}: {
	icon: IconComponent;
	title: string;
	description: string;
}) {
	return (
		<Card className="border-white/15 bg-white/10 text-white backdrop-blur-sm">
			<CardHeader className="space-y-3">
				<div className="flex size-11 items-center justify-center rounded-2xl border border-accent/35 bg-accent/15 text-accent">
					<Icon className="size-5" />
				</div>
				<div className="space-y-2">
					<CardTitle className="text-lg text-white">{title}</CardTitle>
					<CardDescription className="text-sm leading-7 text-white/70">
						{description}
					</CardDescription>
				</div>
			</CardHeader>
		</Card>
	);
}

export function ContactSection() {
	return (
		<section id="kontak" className="border-t border-primary/10 bg-primary">
			<div className="mx-auto grid w-full max-w-screen-2xl gap-8 px-6 py-16 lg:px-8 xl:grid-cols-12 xl:gap-10 xl:px-10 2xl:px-12">
				<div className="space-y-5 xl:col-span-5">
					<p className="text-sm font-medium tracking-[0.22em] text-accent uppercase">
						Kontak dan Inquiry
					</p>
					<h2 className="text-3xl font-semibold tracking-tight text-primary-foreground">
						Siap menjadi mitra terpercaya untuk kebutuhan spring dan custom manufacturing
						Anda.
					</h2>
					<p className="max-w-2xl text-base leading-8 text-primary-foreground/80">
						Untuk kebutuhan RFQ, diskusi spesifikasi, pengiriman gambar teknik, atau
						permintaan sampel, tim kami siap membantu dengan komunikasi yang responsif dan
						dukungan teknis yang tepat.
					</p>

					<div className="flex flex-wrap gap-3">
						<Button
							asChild
							size="lg"
							className="bg-accent text-accent-foreground hover:bg-accent/90"
						>
							<a href="mailto:prima.kirana.spring@gmail.com">Kirim Email</a>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="border-white/20 bg-white/10 text-white hover:bg-white/15 hover:text-white"
						>
							<a href="tel:081330339909">Hubungi Sekarang</a>
						</Button>
					</div>

					<div className="flex flex-wrap gap-2 text-sm text-primary-foreground/75">
						{socialChannels.map((item) => (
							<Badge
								key={item}
								variant="outline"
								className="rounded-full border-white/15 bg-white/10 px-3 py-1 text-primary-foreground"
							>
								{item}
							</Badge>
						))}
					</div>
				</div>

				<div className="grid gap-4 xl:col-span-7 xl:grid-cols-7">
					{contactChannels.map((item) => (
						<div key={item.label} className="xl:col-span-7">
							<ContactCard {...item} />
						</div>
					))}

					<div className="xl:col-span-7">
						<InquiryScope
							icon={PackageCheck}
							title="Ruang lingkup inquiry"
							description="Compression spring, tension spring, torsion spring, wire form custom, review desain, hingga kebutuhan produksi berulang."
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
