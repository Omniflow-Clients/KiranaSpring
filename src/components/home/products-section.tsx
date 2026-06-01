import { startTransition, useState } from "react";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { productLines } from "@/data/company-profile";

type ProductSlide = {
	title: string;
	description: string;
	accent: string;
	image?: string;
};

const productSlides: readonly ProductSlide[] = [
	{
		title: productLines[0].title,
		description: productLines[0].description,
		accent: productLines[0].accent,
		image: "/home-assets/product-compression.png",
	},
	{
		title: productLines[1].title,
		description: productLines[1].description,
		accent: productLines[1].accent,
		image: "/home-assets/product-tension.png",
	},
	{
		title: productLines[2].title,
		description: productLines[2].description,
		accent: productLines[2].accent,
		image: "/home-assets/product-torsion.png",
	},
	{
		title: productLines[3].title,
		description: productLines[3].description,
		accent: productLines[3].accent,
	},
] as const;

export function ProductsSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeSlide = productSlides[activeIndex];

	const changeSlide = (direction: -1 | 1) => {
		startTransition(() => {
			setActiveIndex((current) => {
				const nextIndex = current + direction;
				if (nextIndex < 0) {
					return productSlides.length - 1;
				}
				if (nextIndex >= productSlides.length) {
					return 0;
				}
				return nextIndex;
			});
		});
	};

	return (
		<section id="produk" className="w-full">
			<div className="overflow-hidden bg-[#3f5fe2] px-6 py-12 text-white md:px-10 lg:px-16 lg:py-16">
				<h2 className="mx-auto max-w-[18ch] text-center font-heading text-4xl leading-[1.06] font-light tracking-tight md:text-6xl">
					Designed for you, <span className="font-semibold">PERFECTED</span> in
					every details.
				</h2>

				<div className="mx-auto mt-14 max-w-6xl">
					<div className="relative overflow-hidden rounded-[2.2rem] bg-white/10 p-6 shadow-[0_24px_50px_rgba(20,35,111,0.18)] backdrop-blur-sm md:p-8 lg:p-10">
						<div className="pointer-events-none absolute -left-10 top-16 h-40 w-40 rounded-full bg-white/8 blur-2xl" />
						<div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#2848cf]/60 blur-2xl" />

						<div className="relative grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
							<div className="relative flex items-center justify-center px-14 py-6 md:px-18">
								<button
									type="button"
									aria-label="Produk sebelumnya"
									onClick={() => changeSlide(-1)}
									className="absolute left-0 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#f6d456] text-white shadow-[0_14px_35px_rgba(246,212,86,0.35)] transition-transform hover:scale-105"
								>
									<ArrowLeft className="size-7" />
								</button>

								<div className="flex h-[20rem] w-[20rem] items-center justify-center rounded-full bg-[radial-gradient(circle_at_32%_28%,#6f89ff_0%,#4565ec_58%,#3554de_100%)] shadow-[0_28px_44px_rgba(20,35,111,0.24)] md:h-[24rem] md:w-[24rem]">
									{activeSlide.image ? (
										<img
											src={activeSlide.image}
											alt={activeSlide.title}
											className="h-[15rem] w-[15rem] object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,0.28)] md:h-[19rem] md:w-[19rem]"
										/>
									) : (
										<div className="flex h-[15rem] w-[15rem] flex-col items-center justify-center rounded-[2rem] border border-white/18 bg-white/12 p-6 text-center md:h-[18rem] md:w-[18rem]">
											<div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/14">
												<Sparkles className="size-8 text-[#ffd54a]" />
											</div>
											<p className="mt-5 text-xl font-semibold text-white">
												Custom Spring
											</p>
											<p className="mt-2 text-sm leading-6 text-white/80">
												Sesuai desain, dimensi, material, dan kebutuhan aplikasi.
											</p>
										</div>
									)}
								</div>

								<button
									type="button"
									aria-label="Produk berikutnya"
									onClick={() => changeSlide(1)}
									className="absolute right-0 top-1/2 z-10 flex h-14 w-14 -translate-y-1/2 items-center justify-center rounded-full bg-[#f6d456] text-white shadow-[0_14px_35px_rgba(246,212,86,0.35)] transition-transform hover:scale-105"
								>
									<ArrowRight className="size-7" />
								</button>
							</div>

							<div className="space-y-5 lg:pl-4">
								<p className="text-sm font-medium tracking-[0.22em] text-[#d8e1ff] uppercase">
									Produk Utama
								</p>
								<h3 className="font-heading text-3xl leading-tight font-semibold md:text-5xl">
									{activeSlide.title}
								</h3>
								<p className="max-w-[34rem] text-base leading-8 text-white/84 md:text-lg">
									{activeSlide.description}
								</p>
								<div className="rounded-[1.6rem] border border-white/14 bg-white/10 px-6 py-5">
									<p className="text-sm font-medium tracking-[0.18em] text-[#d8e1ff] uppercase">
										Aplikasi
									</p>
									<p className="mt-3 text-base leading-8 text-white/86 md:text-lg">
										{activeSlide.accent}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-6 flex flex-wrap justify-center gap-3">
						{productSlides.map((slide, index) => (
							<button
								key={slide.title}
								type="button"
								onClick={() => setActiveIndex(index)}
								className={[
									"rounded-full px-5 py-3 text-sm font-medium transition-colors md:text-base",
									index === activeIndex
										? "bg-white text-[#2f58e7]"
										: "bg-white/12 text-white/86 hover:bg-white/18",
								].join(" ")}
							>
								{slide.title}
							</button>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
