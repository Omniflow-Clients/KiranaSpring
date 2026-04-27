import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { PostCard } from "@/components/blog/post-card";
import { Button } from "@/components/ui/button";
import type { BlogPost } from "@/lib/blog";

export function BlogSection({ featuredPosts }: { featuredPosts: readonly BlogPost[] }) {
	return (
		<section className="border-y border-primary/10 bg-muted/60">
			<div className="mx-auto grid w-full max-w-screen-2xl gap-8 px-6 py-16 lg:px-8 xl:grid-cols-12 xl:gap-10 xl:px-10 2xl:px-12">
				<div className="flex items-end justify-between gap-4 xl:col-span-4 xl:flex-col xl:items-start">
					<div className="max-w-xl">
						<p className="mb-3 text-sm font-medium tracking-[0.22em] text-primary uppercase">
							Insight Teknis
						</p>
						<h2 className="text-3xl font-semibold tracking-tight">
							Artikel pendukung untuk memperluas wawasan mengenai manufaktur pegas dan
							quality control.
						</h2>
						<p className="mt-3 max-w-2xl text-base leading-8 text-muted-foreground">
							Blog kami memuat referensi teknis yang relevan untuk tim engineering,
							procurement, dan pihak yang ingin memahami aplikasi spring secara lebih
							praktis.
						</p>
					</div>
					<Button asChild variant="ghost">
						<Link to="/blog">
							Semua artikel
							<ArrowRight className="size-4" />
						</Link>
					</Button>
				</div>

				<div className="grid gap-6 md:grid-cols-2 xl:col-span-8">
					{featuredPosts.map((post) => (
						<PostCard key={post.slug} post={post} featured />
					))}
				</div>
			</div>
		</section>
	);
}
