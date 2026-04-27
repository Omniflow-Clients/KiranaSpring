import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { productLines } from "@/data/company-profile";

export function ProductsSection() {
	return (
		<section id="produk" className="border-y border-primary/10 bg-muted/75">
			<div className="mx-auto grid w-full max-w-screen-2xl gap-8 px-6 py-14 lg:px-8 xl:grid-cols-12 xl:gap-10 xl:px-10 2xl:px-12">
				<div className="xl:col-span-4">
					<p className="mb-3 text-sm font-medium tracking-[0.22em] text-primary uppercase">
						Produk Utama
					</p>
					<h2 className="text-3xl font-semibold tracking-tight">
						Ragam spring dan komponen custom untuk aplikasi elektronik, otomotif, rumah
						tangga, dan mekanikal.
					</h2>
				</div>

				<div className="grid gap-5 md:grid-cols-2 xl:col-span-8 xl:grid-cols-8">
					{productLines.map((product) => (
						<Card
							key={product.title}
							className="border-border/70 bg-background/88 transition-transform duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10 xl:col-span-2"
						>
							<CardHeader className="space-y-4">
								<Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
									Produk
								</Badge>
								<div className="space-y-3">
									<CardTitle className="text-xl leading-tight">{product.title}</CardTitle>
									<CardDescription className="text-sm leading-7">
										{product.description}
									</CardDescription>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-sm leading-7 text-muted-foreground">
									{product.accent}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				<Card className="border-primary/10 bg-primary text-primary-foreground shadow-xl shadow-primary/15 xl:col-span-12">
					<CardHeader className="space-y-3">
						<CardTitle className="text-2xl text-white">
							Layanan Custom Manufacturing
						</CardTitle>
						<CardDescription className="text-sm leading-7 text-primary-foreground/80">
							Kami melayani pengerjaan custom sesuai kebutuhan, mulai dari penyesuaian
							desain, dimensi, material, hingga karakter kerja pegas untuk aplikasi
							tertentu.
						</CardDescription>
					</CardHeader>
				</Card>
			</div>
		</section>
	);
}
