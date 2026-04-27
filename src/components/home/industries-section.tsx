import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	type IndustrySegment,
	industrySegments,
} from "@/data/company-profile";

function IndustryCard({ title, description }: IndustrySegment) {
	return (
		<Card className="border-border/70 bg-background/85 shadow-sm shadow-primary/5">
			<CardHeader className="space-y-3">
				<Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
					Industri
				</Badge>
				<div className="space-y-2">
					<CardTitle className="text-xl leading-tight">{title}</CardTitle>
					<CardDescription className="text-sm leading-7">{description}</CardDescription>
				</div>
			</CardHeader>
		</Card>
	);
}

export function IndustriesSection() {
	return (
		<section className="mx-auto w-full max-w-screen-2xl px-6 py-16 lg:px-8 xl:px-10 2xl:px-12">
			<div className="grid gap-8 xl:grid-cols-12 xl:gap-10">
				<div className="xl:col-span-4">
				<p className="mb-3 text-sm font-medium tracking-[0.22em] text-primary uppercase">
					Bidang Industri
				</p>
				<h2 className="text-3xl font-semibold tracking-tight">
					Kami melayani kebutuhan komponen pegas untuk berbagai sektor manufaktur dan
					engineering.
				</h2>
				</div>

				<div className="grid gap-5 md:grid-cols-2 xl:col-span-8 xl:grid-cols-8">
				{industrySegments.map((item) => (
					<div key={item.title} className="xl:col-span-2">
						<IndustryCard {...item} />
					</div>
				))}
				</div>
			</div>
		</section>
	);
}
