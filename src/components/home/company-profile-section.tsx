import { startTransition, useState } from "react";
import { ArrowLeft, ArrowRight, Handshake, Lightbulb, ShieldCheck, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { coreValues, missionPoints, trustReasons } from "@/data/company-profile";

type CarouselSlide = {
	id: string;
	title: string;
	accent: string;
	description?: string[];
	type: "intro" | "experience" | "mission" | "values" | "commitment";
};

const profileSlides: readonly CarouselSlide[] = [
	{
		id: "halo",
		title: "HALO!",
		accent: "Halo!",
		type: "intro",
		description: [
			"Kami merasa terhormat atas waktu yang Anda luangkan untuk mengenal lebih dekat PT Prima Kirana Spring. Sejak tahun 1995, kami telah membangun reputasi sebagai perusahaan manufaktur yang fokus pada produksi spring berkualitas tinggi dengan tingkat presisi, ketahanan, dan konsistensi yang terjaga. Berpengalaman melayani kebutuhan skala kecil hingga besar, kami terus berinovasi dan meningkatkan standar kualitas di setiap lini produksi.",
			"Dengan komitmen pada setiap detail pekerjaan, kami menghadirkan solusi profesional, unggul, dan dapat diandalkan. Kepercayaan dari berbagai perusahaan besar menjadi bukti dedikasi kami dalam menjaga mutu dan pelayanan. Kami berharap dapat menjalin kemitraan jangka panjang serta tumbuh dan berkembang bersama di masa depan.",
		],
	},
	{
		id: "pengalaman",
		title: "Pengalaman",
		accent: "30+ Tahun",
		type: "experience",
		description: [
			"PT Prima Kirana Spring merupakan perusahaan manufaktur pegas yang berlokasi di Kudus, Jawa Tengah. Perusahaan ini berawal dari CV Prima Spring yang didirikan pada tahun 1995 oleh Bpk. Hudyono. Meski memiliki latar belakang pendidikan di bidang medis, pendiri memiliki minat dan kemampuan teknis yang kuat dalam dunia manufaktur.",
			"Sebelum berdirinya Prima Spring, beliau telah merintis Prima Teknik sebagai penyedia komponen logam untuk kebutuhan industri elektronika. Dalam perjalanan bisnis yang dinamis, perusahaan terus beradaptasi hingga bertransformasi menjadi PT Prima Kirana Spring sebagai bentuk penguatan identitas dan komitmen terhadap pertumbuhan jangka panjang.",
			"Kini tongkat estafet kepemimpinan dipercayakan kepada generasi penerus, yaitu Stefani R. Hudyono, yang membawa perusahaan ke arah yang lebih modern, inovatif, dan kompetitif.",
		],
	},
	{
		id: "visi-misi",
		title: "Visi & Misi",
		accent: "Visi & Misi",
		type: "mission",
	},
	{
		id: "core-value",
		title: "Core Value",
		accent: "Core Value",
		type: "values",
	},
	{
		id: "komitmen",
		title: "Komitmen",
		accent: "Komitmen",
		type: "commitment",
		description: [
			"Setiap proses kerja kami disusun untuk menjaga presisi dimensi, konsistensi elastisitas, dan ketahanan material pada setiap produk.",
			"Kami terbiasa menangani kebutuhan standard part maupun custom design, dengan pendekatan yang rapi sejak incoming QC hingga final packing.",
			"Komitmen tersebut membuat PT Prima Kirana Spring dipercaya sebagai mitra manufaktur untuk kebutuhan industri skala kecil hingga besar.",
		],
	},
];

const directorImagePath = "/company-assets/director.png";
const experienceImagePath = "/company-assets/experience.jpg";
const missionImagePath = "/company-assets/vision-mission.png";
const coreValueImagePath = "/company-assets/core-value.png";
const commitmentImagePath = "/company-assets/commitment.png";

function DirectorVisual() {
	return (
		<div className="relative mx-auto max-w-[34rem]">
			<div className="absolute left-[-1rem] top-10 hidden h-[76%] w-10 rounded-[0.9rem] bg-[#bdbdbd] sm:block lg:left-[-2.3rem] lg:top-14 lg:w-14" />
			<div className="absolute right-[-1rem] top-9 hidden h-[77%] w-10 rounded-[0.9rem] bg-[#bdbdbd] sm:block lg:right-[-2.3rem] lg:top-12 lg:w-14" />

			<div className="relative rounded-[1.4rem] bg-white px-4 pt-4 pb-4 shadow-[0_20px_50px_rgba(156,156,156,0.15)] sm:rounded-[1.8rem] sm:px-8 sm:pt-8 sm:pb-6">
				<div className="mx-auto flex h-[22rem] max-w-[14rem] items-end justify-center overflow-hidden rounded-[0.3rem] bg-[#3559e4] sm:h-[28rem] sm:max-w-[18rem] lg:h-[33rem] lg:max-w-[20rem]">
					<img
						src={directorImagePath}
						alt="Stefani R. Hudyono"
						className="h-full w-full object-cover object-center"
					/>
				</div>

				<div className="relative z-10 -mt-6 ml-auto w-fit rounded-[0.2rem] bg-white px-4 py-3 shadow-[0_12px_30px_rgba(0,0,0,0.08)] sm:-mt-8 sm:px-7 sm:py-4">
					<p className="text-right text-[0.82rem] font-semibold tracking-tight text-[#1848d4] sm:text-[0.95rem] md:text-[1.05rem]">
						Stefani R. Hudyono
						<br />
						Director
					</p>
				</div>
			</div>
		</div>
	);
}

function FramedImageVisual({
	src,
	alt,
	objectClassName = "object-cover",
}: {
	src: string;
	alt: string;
	objectClassName?: string;
}) {
	return (
		<div className="relative mx-auto h-[22rem] w-full max-w-[34rem] overflow-hidden rounded-[1.4rem] bg-white shadow-[0_20px_50px_rgba(156,156,156,0.15)] sm:h-[30rem] sm:rounded-[1.8rem] lg:h-[38rem]">
			<img src={src} alt={alt} className={["h-full w-full", objectClassName].join(" ")} />
		</div>
	);
}

function ValueCard({
	icon: Icon,
	title,
	description,
}: {
	icon: typeof Target;
	title: string;
	description: string;
}) {
	return (
		<div className="rounded-[1.4rem] bg-[#2f58e7] p-5 text-white shadow-[0_18px_35px_rgba(47,88,231,0.18)] sm:rounded-[1.8rem] sm:p-6">
			<div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/12 sm:h-14 sm:w-14">
				<Icon className="size-6 sm:size-7" />
			</div>
			<h3 className="mt-4 text-[1.35rem] font-semibold sm:mt-5 sm:text-[1.7rem]">{title}</h3>
			<p className="mt-3 text-[0.95rem] leading-6 text-white/88 sm:text-[1.02rem] sm:leading-7">{description}</p>
		</div>
	);
}

function AccentTitle({
	title,
	className = "",
}: {
	title: string;
	className?: string;
}) {
	return (
		<div className={["inline-block bg-[#ffd32c] px-3 py-1 sm:px-5", className].join(" ")}>
			<h2 className="font-heading text-[2.4rem] leading-none font-semibold tracking-tight text-[#2f58e7] sm:text-[3.3rem] md:text-[4.4rem] xl:text-[5.1rem]">
				{title}
			</h2>
		</div>
	);
}

function SlideVisual({ slide }: { slide: CarouselSlide }) {
	switch (slide.type) {
		case "intro":
			return <DirectorVisual />;
		case "experience":
			return (
				<FramedImageVisual
					src={experienceImagePath}
					alt="Pengalaman Prima Kirana Spring"
					objectClassName="h-full w-full object-cover"
				/>
			);
		case "mission":
			return (
				<FramedImageVisual
					src={missionImagePath}
					alt="Visi dan misi Prima Kirana Spring"
					objectClassName="h-full w-full object-cover object-left"
				/>
			);
		case "values":
			return (
				<FramedImageVisual
					src={coreValueImagePath}
					alt="Core value Prima Kirana Spring"
					objectClassName="h-full w-full object-cover"
				/>
			);
		case "commitment":
			return (
				<FramedImageVisual
					src={commitmentImagePath}
					alt="Komitmen kualitas Prima Kirana Spring"
					objectClassName="h-full w-full object-cover object-left"
				/>
			);
	}
}

function SlideBody({ slide }: { slide: CarouselSlide }) {
	if (slide.type === "mission") {
		return (
			<div className="space-y-6 pt-2 lg:space-y-8 lg:pt-8">
				<AccentTitle title={slide.title} />

				<div className="space-y-5 sm:space-y-6">
					<div className="rounded-[1.5rem] bg-[#2f58e7] px-5 py-5 text-white shadow-[0_18px_35px_rgba(47,88,231,0.18)] sm:rounded-[2rem] sm:px-8 sm:py-7">
						<p className="text-[1.5rem] font-semibold text-[#ffd32c] sm:text-[2rem]">Visi</p>
						<p className="mt-3 text-[1rem] leading-[1.35] font-medium sm:text-[1.35rem] sm:leading-[1.2]">
							Menjadi perusahaan manufaktur pegas (spring) yang unggul,
							presisi, dan terpercaya di Indonesia.
						</p>
					</div>

					<div className="rounded-[1.5rem] bg-[#2f58e7] px-5 py-5 text-white shadow-[0_18px_35px_rgba(47,88,231,0.18)] sm:rounded-[2rem] sm:px-8 sm:py-7">
						<p className="text-[1.5rem] font-semibold text-[#ffd32c] sm:text-[2rem]">Misi</p>
						<ul className="mt-4 space-y-3 text-[0.98rem] leading-[1.35] sm:space-y-4 sm:text-[1.2rem] sm:leading-[1.2]">
							{missionPoints.map((point) => (
								<li key={point} className="flex gap-3">
									<span className="mt-1 text-[#ffd32c]">-</span>
									<span>{point}</span>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		);
	}

	if (slide.type === "values") {
		return (
			<div className="space-y-6 pt-2 lg:space-y-8 lg:pt-8">
				<AccentTitle title={slide.title} />
				<div className="grid gap-5 md:grid-cols-2">
					<ValueCard
						icon={Target}
						title={coreValues[0].title}
						description={coreValues[0].description}
					/>
					<ValueCard
						icon={Handshake}
						title={coreValues[1].title}
						description={coreValues[1].description}
					/>
					<ValueCard
						icon={ShieldCheck}
						title={coreValues[2].title}
						description={coreValues[2].description}
					/>
					<ValueCard
						icon={Lightbulb}
						title={coreValues[3].title}
						description={coreValues[3].description}
					/>
				</div>
			</div>
		);
	}

	if (slide.type === "commitment") {
		return (
			<div className="space-y-6 pt-2 lg:space-y-8 lg:pt-8">
				<AccentTitle title={slide.title} />
				<div className="grid gap-4">
					{trustReasons.map((item) => (
						<div
							key={item.title}
							className="rounded-[1.4rem] border border-white/70 bg-white/82 px-5 py-5 shadow-[0_16px_34px_rgba(141,141,141,0.08)] sm:rounded-[1.8rem] sm:px-7 sm:py-6"
						>
							<p className="text-[1.2rem] font-semibold text-[#1848d4] sm:text-[1.45rem]">
								{item.title}
							</p>
							<p className="mt-3 text-[0.95rem] leading-6 text-[#4d556e] sm:text-[1.02rem] sm:leading-7">
								{item.description}
							</p>
						</div>
					))}
				</div>
			</div>
		);
	}

	return (
		<div className="space-y-6 pt-2 lg:space-y-8 lg:pt-8">
			<AccentTitle title={slide.title} />
			{slide.type === "experience" ? (
				<p className="-mt-2 text-[0.98rem] font-medium text-[#2f58e7] sm:-mt-3 sm:text-[1.15rem] md:text-[1.45rem]">
					Pengalaman lebih dari{" "}
					<span className="bg-[#ffd32c] px-2 py-1 font-semibold text-[#1848d4]">
						30 Tahun
					</span>
				</p>
			) : null}

			<div className="max-w-[52rem] space-y-5 text-[0.98rem] leading-[1.25] text-black sm:space-y-6 sm:text-[1.1rem] sm:leading-[1.2] md:text-[1.35rem] xl:text-[1.75rem]">
				{slide.description?.map((paragraph) => (
					<p key={paragraph}>{paragraph}</p>
				))}
			</div>
		</div>
	);
}

export function CompanyProfileSection() {
	const [activeIndex, setActiveIndex] = useState(0);
	const activeSlide = profileSlides[activeIndex];

	const changeSlide = (direction: -1 | 1) => {
		startTransition(() => {
			setActiveIndex((current) => {
				const nextIndex = current + direction;
				if (nextIndex < 0) {
					return profileSlides.length - 1;
				}
				if (nextIndex >= profileSlides.length) {
					return 0;
				}
				return nextIndex;
			});
		});
	};

	return (
		<section id="profil" className="w-full">
			<div className="profile-panel relative overflow-hidden bg-[#e5e5e5] px-4 py-8 sm:px-6 md:px-10 md:py-10 lg:px-14 lg:py-12">
				<div className="mb-6 sm:mb-8">
					<div className="flex items-center gap-3">
						<Badge className="rounded-full bg-[#2f58e7] px-4 py-1.5 text-white hover:bg-[#2f58e7]">
							Profil Perusahaan
						</Badge>
						<div className="h-px flex-1 bg-black/10" />
					</div>

					<div className="mt-4 text-xs text-[#5f6781] sm:text-sm">
						Geser dengan tombol panah atau klik topik untuk melihat ringkasan profil perusahaan.
					</div>
				</div>

				<div className="relative grid gap-8 lg:gap-10 xl:grid-cols-[0.9fr_1.1fr] xl:items-start">
					<div className="space-y-5 sm:space-y-6">
						<div className="relative mx-auto max-w-[40rem] px-6 sm:px-8 lg:px-14">
							<button
								type="button"
								aria-label="Profil sebelumnya"
								onClick={() => changeSlide(-1)}
								className="absolute left-0 top-[38%] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#f6d456] text-white shadow-[0_14px_35px_rgba(246,212,86,0.35)] transition-transform hover:scale-105 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
							>
								<ArrowLeft className="size-6 sm:size-7 lg:size-8" />
							</button>
							<button
								type="button"
								aria-label="Profil berikutnya"
								onClick={() => changeSlide(1)}
								className="absolute right-0 top-[38%] z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#f6d456] text-white shadow-[0_14px_35px_rgba(246,212,86,0.35)] transition-transform hover:scale-105 sm:h-14 sm:w-14 lg:h-16 lg:w-16"
							>
								<ArrowRight className="size-6 sm:size-7 lg:size-8" />
							</button>

							<SlideVisual slide={activeSlide} />
						</div>

						<div className="flex flex-wrap items-center gap-2 sm:gap-3">
							{profileSlides.map((slide, index) => (
								<button
									key={slide.id}
									type="button"
									onClick={() => setActiveIndex(index)}
									className={[
										"rounded-full px-3.5 py-2 text-xs font-medium transition-colors sm:px-4 sm:text-sm",
										index === activeIndex
											? "bg-[#2f58e7] text-white"
											: "bg-white/70 text-[#506082] hover:text-[#1848d4]",
									].join(" ")}
								>
									{slide.accent}
								</button>
							))}
						</div>
					</div>

					<SlideBody slide={activeSlide} />
				</div>
			</div>
		</section>
	);
}
