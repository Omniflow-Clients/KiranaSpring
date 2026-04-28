import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { productLines } from "@/data/company-profile";

export function ProductsSection() {
	return (
		<section
			id="produk"
			className="mx-auto w-full max-w-screen-2xl px-6 py-28 lg:px-8 xl:px-10 2xl:px-12"
		>
			<div className="mx-auto mb-14 max-w-2xl text-center">
				<p className="mb-3 text-sm font-medium tracking-[0.22em] text-primary uppercase">
					Produk Utama
				</p>
				<h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
					Ragam spring dan komponen custom untuk aplikasi elektronik, otomotif,
					rumah tangga, dan mekanikal.
				</h2>
			</div>

			<div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
				{productLines.map((product) => (
					<Card
						key={product.title}
						className="border-border/70 bg-background/88 p-6 transition-transform duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10"
					>
						<CardHeader className="space-y-2">
							<CardTitle className="font-heading text-xl leading-tight">
								{product.title}
							</CardTitle>
							<CardDescription className="text-sm leading-7">
								{product.description}
							</CardDescription>
						</CardHeader>
					</Card>
				))}
			</div>

			<div className="mx-auto mt-8 max-w-5xl">
				<Card className="border-primary/10 bg-primary text-primary-foreground shadow-xl shadow-primary/15">
					<CardHeader className="space-y-3 p-8">
						<CardTitle className="font-heading text-2xl text-white">
							Layanan Custom Manufacturing
						</CardTitle>
						<CardDescription className="text-sm leading-7 text-primary-foreground/80">
							Kami melayani pengerjaan custom sesuai kebutuhan, mulai dari
							penyesuaian desain, dimensi, material, hingga karakter kerja pegas
							untuk aplikasi tertentu.
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</section>
	);
}
