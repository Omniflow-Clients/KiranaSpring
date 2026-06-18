import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PostCard } from "@/components/blog/post-card";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/lib/blog";

export function BlogSection({
	featuredPosts,
}: {
	featuredPosts: readonly BlogPost[];
}) {
	return (
		<section
			id="insight-teknis"
			className="w-full scroll-mt-20 sm:scroll-mt-24 xl:scroll-mt-28"
		>
			<div className="overflow-hidden bg-[#e7e7e5] px-6 py-14 md:px-10 lg:px-16 lg:py-18">
				<div className="grid gap-10 xl:grid-cols-[0.88fr_1.12fr] xl:items-start">
					<div className="flex h-full flex-col justify-between gap-8">
						<div className="max-w-[30rem]">
							<p className="mb-3 text-sm font-medium tracking-[0.22em] text-primary uppercase">
								Insight Teknis
							</p>
							<h2 className="font-heading text-4xl leading-[1.08] font-semibold tracking-tight text-[#1d3d9f] md:text-5xl">
								Artikel pendukung untuk memperluas wawasan mengenai manufaktur
								pegas dan quality control.
							</h2>
							<p className="mt-5 max-w-2xl text-lg leading-9 text-[#64729f]">
								Blog kami memuat referensi teknis yang relevan untuk tim
								engineering, procurement, dan pihak yang ingin memahami aplikasi
								spring secara lebih praktis.
							</p>
						</div>

						<Button
							asChild
							variant="ghost"
							className="w-fit rounded-full border border-[#1d3d9f]/14 bg-white/70 px-6 py-6 text-[#1d3d9f] hover:bg-white"
						>
							<Link to="/blog">
								Semua artikel
								<ArrowRight className="size-4" />
							</Link>
						</Button>
					</div>

					<div className="grid gap-8 md:grid-cols-2">
						{featuredPosts.map((post) => (
							<PostCard key={post.slug} post={post} featured />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
