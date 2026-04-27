import { PostCard } from "@/components/blog/post-card";
import { Badge } from "@/components/ui/badge";
import { getAllBlogPosts } from "@/lib/blog";
import { SiteShell } from "@/layouts/site-shell";

const allPosts = getAllBlogPosts();

export function BlogIndexPage() {
	return (
		<SiteShell>
			<section className="mx-auto w-full max-w-screen-2xl px-6 py-16 lg:px-8 xl:px-10 2xl:px-12 md:py-20">
				<div className="grid gap-8 xl:grid-cols-12 xl:gap-10">
					<div className="space-y-4 xl:col-span-4">
					<Badge variant="outline" className="rounded-full px-4 py-1 text-primary">
						Daftar Artikel
					</Badge>
					<h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
						Artikel manufaktur, quality control, dan engineering pegas.
					</h1>
					<p className="text-base leading-8 text-muted-foreground md:text-lg">
						Kumpulan artikel ini disiapkan sebagai referensi teknis tambahan untuk
						memahami desain, kualitas, dan aplikasi spring pada berbagai kebutuhan
						industri.
					</p>
					</div>

					<div className="grid gap-6 md:grid-cols-2 xl:col-span-8 xl:grid-cols-3">
					{allPosts.map((post) => (
						<PostCard key={post.slug} post={post} />
					))}
					</div>
				</div>
			</section>
		</SiteShell>
	);
}
