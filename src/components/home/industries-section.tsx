import { type IndustrySegment, industrySegments } from "@/data/company-profile";

const industryVisuals = [
	"/home-assets/industry-electronics.webp",
	"/home-assets/industry-automotive.webp",
	"/home-assets/industry-appliance.webp",
	"/home-assets/industry-mechanical.webp",
] as const;

export function IndustriesSection() {
	return (
		<section className="w-full">
			<div className="overflow-hidden bg-white px-6 py-12 md:px-10 lg:px-16 lg:py-16">
				<h2 className="mx-auto max-w-[16ch] text-center font-heading text-4xl leading-[1.08] font-light tracking-tight text-[#1848d4] md:text-6xl">
					Bidang Industri yang Dilayani
				</h2>

				<div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-4">
					{industrySegments.map((item: IndustrySegment, index) => (
						<div
							key={item.title}
							className="overflow-hidden rounded-[1.8rem] bg-[#f4f5fa] shadow-[0_18px_36px_rgba(20,35,111,0.08)]"
						>
							<img
								src={industryVisuals[index]}
								alt={item.title}
								className="h-56 w-full object-cover"
							/>
							<div className="p-7">
								<h3 className="text-[1.75rem] leading-tight font-semibold text-[#1848d4]">
									{item.title}
								</h3>
								<p className="mt-4 text-base leading-8 text-[#5f6781]">
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
