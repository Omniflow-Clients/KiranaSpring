import { PackageCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type ContactChannel,
	contactChannels,
	type IconComponent,
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
		<Card className="gap-0 rounded-[1.6rem] border border-white/18 bg-white/10 p-5 text-white backdrop-blur-sm transition-colors hover:bg-white/14 sm:rounded-[2rem] sm:p-6">
			<CardContent className="flex h-full flex-col gap-5 p-0">
				<div className="flex size-11 shrink-0 items-center justify-center rounded-[1rem] border border-[#ffd652]/30 bg-[#ffd652]/16 text-[#ffd652] sm:size-12 sm:rounded-[1.1rem]">
					<Icon className="size-5" />
				</div>
				<div className="space-y-3">
					<p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/62">
						{label}
					</p>
					<p
						className={cn(
							"break-words leading-[1.22] font-medium text-white",
							getContactValueClass(label)
						)}
					>
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
		<Card className="gap-0 rounded-[1.6rem] border border-white/18 bg-white/10 p-5 text-white backdrop-blur-sm sm:rounded-[2rem] sm:p-6">
			<CardHeader className="space-y-3 p-0">
				<div className="flex size-11 items-center justify-center rounded-[1rem] border border-[#ffd652]/30 bg-[#ffd652]/16 text-[#ffd652] sm:size-12 sm:rounded-[1.1rem]">
					<Icon className="size-5" />
				</div>
				<div className="space-y-2">
					<CardTitle className="text-lg text-white">{title}</CardTitle>
					<CardDescription className="text-sm leading-6 text-white/72 sm:leading-7">
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
			className="w-full scroll-mt-20 overflow-hidden bg-[linear-gradient(135deg,#0d37bf_0%,#214ce0_42%,#143bbf_100%)] sm:scroll-mt-24 xl:scroll-mt-28"
		>
			<div className="mx-auto grid w-full max-w-[1520px] gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] xl:gap-12 xl:px-14 xl:py-22">
				<div className="space-y-7">
					<p className="text-sm font-semibold tracking-[0.22em] text-[#ffd652] uppercase">
						Kontak dan Inquiry
					</p>
					<h2 className="font-heading text-[2.2rem] leading-[1.08] font-semibold tracking-tight text-white sm:text-4xl md:text-5xl">
						Terus mendukung kebutuhan industri untuk spring dan custom
						manufacturing Anda.
					</h2>
					<p className="max-w-2xl text-base leading-8 text-white/78 sm:text-lg sm:leading-9">
						Untuk kebutuhan RFQ, diskusi spesifikasi, pengiriman gambar teknik,
						atau permintaan sampel, tim kami siap membantu dengan komunikasi
						yang responsif dan dukungan teknis yang tepat.
					</p>

					<div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
						<Button
							asChild
							size="lg"
							className="h-auto w-full rounded-[1.15rem] bg-[#ffd652] px-7 py-5 text-base font-semibold text-[#18379f] hover:bg-[#ffd652]/92 sm:w-auto sm:py-6"
						>
							<a href="mailto:prima.kirana.spring@gmail.com">Kirim Email</a>
						</Button>
						<Button
							asChild
							variant="outline"
							size="lg"
							className="h-auto w-full rounded-[1.15rem] border-white/18 bg-white/10 px-7 py-5 text-base text-white hover:bg-white/15 hover:text-white sm:w-auto sm:py-6"
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
							description="Compression spring, extension spring, torsion spring, wire form custom, review desain, hingga kebutuhan produksi berulang."
						/>
					</div>
				</div>
			</div>
		</section>
	);
}
