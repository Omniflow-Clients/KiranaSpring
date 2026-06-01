import { productionStages } from "@/data/company-profile";

export function ProductionProcessSection() {
	return (
		<section className="w-full">
			<div className="overflow-hidden bg-[#3f5fe2] px-6 py-12 text-white md:px-10 lg:px-16 lg:py-16">
				<h2 className="text-center font-heading text-4xl font-light tracking-tight md:text-6xl">
					Proses Produksi
				</h2>

				<div className="mx-auto mt-14 flex max-w-6xl flex-wrap justify-center gap-6">
					{productionStages.map((stage) => (
						<div
							key={stage.step}
							className="w-full max-w-[32rem] rounded-[1.8rem] bg-white/12 p-7 shadow-[0_18px_36px_rgba(20,35,111,0.16)] lg:w-[calc(50%-0.75rem)] xl:w-[calc(33.333%-1rem)]"
						>
							<div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#ffd54a] text-lg font-semibold text-[#1848d4]">
								{stage.step}
							</div>
							<h3 className="mt-6 text-[1.8rem] font-semibold">{stage.title}</h3>
							<p className="mt-4 text-base leading-8 text-white/84">
								{stage.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
