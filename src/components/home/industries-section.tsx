import { type IndustrySegment, industrySegments } from "@/data/company-profile";

const industryVisuals = [
	"/home-assets/industry-electronics.png",
	"/home-assets/industry-automotive.png",
	"/home-assets/industry-appliance.png",
	"/home-assets/industry-mechanical.png",
] as const;

export function IndustriesSection() {
	return (
		<section className="w-full">
			<div className="overflow-hidden bg-[#3f5fe2] px-6 py-12 text-white md:px-10 lg:px-16 lg:py-16">
				<h2 className="mx-auto max-w-[16ch] text-center font-heading text-4xl leading-[1.08] font-light tracking-tight md:text-6xl">
					Bidang industri yang dilayani
				</h2>

				<div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
					{industrySegments.map((item: IndustrySegment, index) => (
						<div
							key={item.title}
							className="overflow-hidden rounded-[1.8rem] bg-white/12 shadow-[0_18px_36px_rgba(20,35,111,0.16)]"
						>
							<img
								src={industryVisuals[index]}
								alt={item.title}
								className="h-56 w-full object-cover"
							/>
							<div className="p-7">
								<h3 className="text-[1.75rem] leading-tight font-semibold">
									{item.title}
								</h3>
								<p className="mt-4 text-base leading-8 text-white/84">
									{item.description}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
