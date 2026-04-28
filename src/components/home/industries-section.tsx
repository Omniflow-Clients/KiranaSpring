import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { type IndustrySegment, industrySegments } from "@/data/company-profile";

function IndustryCard({ title, description }: IndustrySegment) {
	return (
		<Card className="border-border/70 bg-background/85 p-6 shadow-sm shadow-primary/5 transition-transform duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10">
			<CardHeader className="space-y-2">
				<CardTitle className="font-heading text-xl leading-tight">
					{title}
				</CardTitle>
				<CardDescription className="text-sm leading-7">
					{description}
				</CardDescription>
			</CardHeader>
		</Card>
	);
}

export function IndustriesSection() {
	return (
		<section className="mx-auto w-full max-w-screen-2xl px-6 py-28 lg:px-8 xl:px-10 2xl:px-12">
			<div className="mx-auto mb-14 max-w-2xl text-center">
				<p className="mb-3 text-sm font-medium tracking-[0.22em] text-primary uppercase">
					Bidang Industri
				</p>
				<h2 className="font-heading text-3xl font-semibold tracking-tight md:text-4xl">
					Kami melayani kebutuhan komponen pegas untuk berbagai sektor
					manufaktur dan engineering.
				</h2>
			</div>

			<div className="mx-auto grid max-w-5xl gap-6 sm:grid-cols-2">
				{industrySegments.map((item) => (
					<IndustryCard key={item.title} {...item} />
				))}
			</div>
		</section>
	);
}
