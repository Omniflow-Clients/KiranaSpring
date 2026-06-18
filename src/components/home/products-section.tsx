import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
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

	useEffect(() => {
		for (const slide of productSlides) {
			if (slide.image) {
				const image = new Image();
				image.src = slide.image;
			}
		}
	}, []);

	const changeSlide = (direction: -1 | 1) => {
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
	};

	return (
		<section
			id="produk"
			className="w-full scroll-mt-20 sm:scroll-mt-24 xl:scroll-mt-28"
		>
			<div className="overflow-hidden bg-[#3f5fe2] px-4 py-10 text-white sm:px-6 sm:py-12 md:px-10 lg:px-16 lg:py-16">
				<h2 className="mx-auto max-w-[14ch] text-center font-heading text-[2.3rem] leading-[1.06] font-light tracking-tight sm:max-w-[16ch] sm:text-4xl md:max-w-[18ch] md:text-6xl">
					Designed for you, <span className="font-semibold">PERFECTED</span> in
					every details.
				</h2>

				<div className="mx-auto mt-10 max-w-6xl sm:mt-14">
					<div className="relative overflow-hidden rounded-[1.8rem] bg-white/10 p-4 shadow-[0_24px_50px_rgba(20,35,111,0.18)] backdrop-blur-sm sm:p-6 md:rounded-[2.2rem] md:p-8 lg:p-10">
						<div className="pointer-events-none absolute -left-10 top-16 h-40 w-40 rounded-full bg-white/8 blur-2xl" />
						<div className="pointer-events-none absolute bottom-0 right-0 h-52 w-52 rounded-full bg-[#2848cf]/60 blur-2xl" />

						<div className="relative grid gap-8 lg:grid-cols-[0.94fr_1.06fr] lg:items-center">
							<div className="relative flex items-center justify-center px-10 py-4 sm:px-14 sm:py-6 md:px-18">
								<button
									type="button"
									aria-label="Produk sebelumnya"
									onClick={() => changeSlide(-1)}
									className="absolute left-4 top-[42%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#f6d456] text-white shadow-[0_14px_35px_rgba(246,212,86,0.35)] transition-transform hover:scale-105 sm:left-0 sm:top-1/2 sm:h-14 sm:w-14"
								>
									<ArrowLeft className="size-6 sm:size-7" />
								</button>

								<div className="flex h-[15rem] w-[15rem] items-center justify-center rounded-full bg-[radial-gradient(circle_at_32%_28%,#6f89ff_0%,#4565ec_58%,#3554de_100%)] shadow-[0_28px_44px_rgba(20,35,111,0.24)] sm:h-[18rem] sm:w-[18rem] md:h-[24rem] md:w-[24rem]">
									{activeSlide.image ? (
										<img
											src={activeSlide.image}
											alt={activeSlide.title}
											className="h-[10rem] w-[10rem] object-contain drop-shadow-[0_18px_18px_rgba(0,0,0,0.28)] sm:h-[13rem] sm:w-[13rem] md:h-[19rem] md:w-[19rem]"
										/>
									) : (
										<div className="flex h-[10rem] w-[10rem] flex-col items-center justify-center rounded-[1.35rem] border border-white/18 bg-white/12 px-3 py-3 text-center sm:h-[13rem] sm:w-[13rem] sm:rounded-[1.5rem] sm:px-4 sm:py-4 md:h-[18rem] md:w-[18rem] md:rounded-[2rem] md:px-6 md:py-6">
											<div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/14 sm:h-12 sm:w-12 md:h-16 md:w-16">
												<Sparkles className="size-6 text-[#ffd54a] sm:size-7 md:size-8" />
											</div>
											<p className="mt-3 text-[0.72rem] leading-[1.15] font-semibold text-white sm:mt-4 sm:text-[0.95rem] md:mt-5 md:text-xl">
												Custom Spring
											</p>
											<p className="mt-1.5 text-[0.52rem] leading-[1.35] text-white/80 sm:mt-2 sm:text-[0.68rem] sm:leading-5 md:text-sm md:leading-6">
												Sesuai desain, dimensi, material, dan kebutuhan
												aplikasi.
											</p>
										</div>
									)}
								</div>

								<button
									type="button"
									aria-label="Produk berikutnya"
									onClick={() => changeSlide(1)}
									className="absolute right-4 top-[42%] z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#f6d456] text-white shadow-[0_14px_35px_rgba(246,212,86,0.35)] transition-transform hover:scale-105 sm:right-0 sm:top-1/2 sm:h-14 sm:w-14"
								>
									<ArrowRight className="size-6 sm:size-7" />
								</button>
							</div>

							<div className="space-y-4 sm:space-y-5 lg:pl-4">
								<p className="text-sm font-medium tracking-[0.22em] text-[#d8e1ff] uppercase">
									Produk Utama
								</p>
								<h3 className="font-heading text-[2rem] leading-tight font-semibold sm:text-3xl md:text-5xl">
									{activeSlide.title}
								</h3>
								<p className="max-w-[34rem] text-sm leading-7 text-white/84 sm:text-base md:text-lg">
									{activeSlide.description}
								</p>
								<div className="rounded-[1.4rem] border border-white/14 bg-white/10 px-5 py-4 sm:rounded-[1.6rem] sm:px-6 sm:py-5">
									<p className="text-sm font-medium tracking-[0.18em] text-[#d8e1ff] uppercase">
										Aplikasi
									</p>
									<p className="mt-3 text-sm leading-7 text-white/86 sm:text-base md:text-lg">
										{activeSlide.accent}
									</p>
								</div>
							</div>
						</div>
					</div>

					<div className="mt-6 flex flex-wrap justify-center gap-2 sm:gap-3">
						{productSlides.map((slide, index) => (
							<button
								key={slide.title}
								type="button"
								onClick={() => setActiveIndex(index)}
								className={[
									"rounded-full px-4 py-2.5 text-xs font-medium transition-colors sm:px-5 sm:py-3 sm:text-sm md:text-base",
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
