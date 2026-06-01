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
import { cn } from "@/lib/utils";

function getContactValueClass(label: string) {
	if (label === "Telepon / WhatsApp") {
		return "text-[1.2rem] md:text-[1.35rem]";
	}

	if (label === "Website") {
		return "text-[1.15rem] md:text-[1.3rem]";
	}

	if (label === "Email") {
		return "text-[1.05rem] md:text-[1.2rem]";
	}

	return "text-[1.1rem] md:text-[1.25rem]";
}

function ContactCard({ icon: Icon, label, value, href }: ContactChannel) {
	const content = (
		<Card className="gap-0 rounded-[2rem] border border-white/18 bg-white/10 p-6 text-white backdrop-blur-sm transition-colors hover:bg-white/14">
			<CardContent className="flex h-full flex-col gap-5 p-0">
				<div className="flex size-12 shrink-0 items-center justify-center rounded-[1.1rem] border border-[#ffd652]/30 bg-[#ffd652]/16 text-[#ffd652]">
					<Icon className="size-5" />
				</div>
				<div className="space-y-3">
					<p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/62">
						{label}
					</p>
					<p className={cn("break-words leading-[1.22] font-medium text-white", getContactValueClass(label))}>
						{value}
					</p>
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
		<Card className="gap-0 rounded-[2rem] border border-white/18 bg-white/10 p-6 text-white backdrop-blur-sm">
			<CardHeader className="space-y-3 p-0">
				<div className="flex size-12 items-center justify-center rounded-[1.1rem] border border-[#ffd652]/30 bg-[#ffd652]/16 text-[#ffd652]">
					<Icon className="size-5" />
				</div>
				<div className="space-y-2">
					<CardTitle className="text-lg text-white">{title}</CardTitle>
					<CardDescription className="text-sm leading-7 text-white/72">
						{description}
					</CardDescription>
				</div>
			</CardHeader>
		</Card>
	);
}

export function ContactSection() {
	return (
		<section
			id="kontak"
			className="w-full overflow-hidden bg-[linear-gradient(135deg,#0d37bf_0%,#214ce0_42%,#143bbf_100%)]"
		>
			<div className="mx-auto grid w-full max-w-[1520px] gap-10 px-6 py-18 lg:px-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] xl:gap-12 xl:px-14 xl:py-22">
				<div className="space-y-7">
					<p className="text-sm font-semibold tracking-[0.22em] text-[#ffd652] uppercase">
						Kontak dan Inquiry
					</p>
					<h2 className="font-heading text-4xl leading-[1.05] font-semibold tracking-tight text-white md:text-5xl">
						Siap menjadi mitra terpercaya untuk kebutuhan spring dan custom
						manufacturing Anda.
					</h2>
					<p className="max-w-2xl text-lg leading-9 text-white/78">
						Untuk kebutuhan RFQ, diskusi spesifikasi, pengiriman gambar teknik,
						atau permintaan sampel, tim kami siap membantu dengan komunikasi
						yang responsif dan dukungan teknis yang tepat.
					</p>

					<div className="flex flex-wrap gap-3">
						<Button
							asChild
							size="lg"
							className="h-auto rounded-[1.15rem] bg-[#ffd652] px-7 py-6 text-base font-semibold text-[#18379f] hover:bg-[#ffd652]/92"
						>
							<a href="mailto:prima.kirana.spring@gmail.com">Kirim Email</a>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="h-auto rounded-[1.15rem] border-white/18 bg-white/10 px-7 py-6 text-base text-white hover:bg-white/15 hover:text-white"
						>
							<a href="tel:081330339909">Hubungi Sekarang</a>
						</Button>
					</div>

					<div className="flex flex-wrap gap-2 text-sm text-white/80">
						{socialChannels.map((item) => (
							<Badge
								key={item}
								variant="outline"
								className="rounded-full border-white/15 bg-white/10 px-3 py-1 text-white"
							>
								{item}
							</Badge>
						))}
					</div>
				</div>

				<div className="grid gap-5">
					{contactChannels.map((item) => (
						<ContactCard key={item.label} {...item} />
					))}

					<div>
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
