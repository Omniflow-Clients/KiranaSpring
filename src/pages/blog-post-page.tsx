import { lazy, Suspense } from "react";
import { ChevronLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { PostMeta } from "@/components/blog/post-meta";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import {
	getBlogPostBySlug,
	getRelatedBlogPosts,
} from "@/lib/blog";
import { SiteShell } from "@/layouts/site-shell";
import { NotFoundPage } from "@/pages/not-found-page";

const BlogMarkdown = lazy(async () => {
	const module = await import("@/components/blog-markdown");
	return { default: module.BlogMarkdown };
});

export function BlogPostPage() {
	const { slug } = useParams();

	if (!slug) {
		return <NotFoundPage />;
	}

	const post = getBlogPostBySlug(slug);

	if (!post) {
		return <NotFoundPage />;
	}

	const relatedPosts = getRelatedBlogPosts(slug, 2);

	return (
		<SiteShell>
			<section className="mx-auto w-full max-w-screen-2xl px-6 py-10 lg:px-8 xl:px-10 2xl:px-12 md:py-16">
				<Button asChild variant="ghost" className="-ml-4 mb-6">
					<Link to="/blog">
						<ChevronLeft className="size-4" />
						Kembali ke blog
					</Link>
				</Button>

				<div className="grid gap-10 xl:grid-cols-12 xl:gap-10">
					<article className="space-y-8 xl:col-span-8">
						<header className="space-y-5">
							<div className="flex flex-wrap items-center gap-3">
								<Badge className="rounded-full px-3 py-1">{post.category}</Badge>
								{post.tags.map((tag) => (
									<Badge
										key={tag}
										variant="outline"
										className="rounded-full px-3 py-1 text-xs"
									>
										{tag}
									</Badge>
								))}
							</div>
							<div className="space-y-4">
								<h1 className="max-w-4xl text-4xl leading-tight font-semibold tracking-tight md:text-5xl">
									{post.title}
								</h1>
								<p className="max-w-3xl text-lg leading-8 text-muted-foreground">
									{post.description}
								</p>
							</div>
							<PostMeta
								date={post.formattedDate}
								readingTimeMinutes={post.readingTimeMinutes}
								author={post.author}
							/>
						</header>

						<Card className="border-border/70 bg-card/70 py-0">
							<CardContent className="px-0">
								<Suspense
									fallback={
										<div className="px-6 py-8 text-sm text-muted-foreground md:px-10">
											Memuat artikel...
										</div>
									}
								>
									<BlogMarkdown
										className="blog-prose px-6 py-8 md:px-10"
										content={post.content}
									/>
								</Suspense>
							</CardContent>
						</Card>
					</article>

					<aside className="space-y-6 xl:col-span-4">
						<Card className="border-border/70 bg-card/80">
							<CardHeader className="space-y-3">
								<CardTitle className="text-lg">Tentang konten</CardTitle>
								<CardDescription className="leading-7">
									Artikel dirender dari arsip Markdown internal agar pembaruan materi
									tetap terstruktur, mudah ditinjau, dan terdokumentasi dengan baik.
								</CardDescription>
							</CardHeader>
						</Card>

						{relatedPosts.length > 0 ? (
							<Card className="border-border/70 bg-card/80">
								<CardHeader className="space-y-3">
									<CardTitle className="text-lg">Artikel terkait</CardTitle>
									<CardDescription>
										Lanjutan bacaan dari topik yang mirip.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-5">
									{relatedPosts.map((relatedPost) => (
										<div key={relatedPost.slug} className="space-y-2">
											<p className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
												{relatedPost.category}
											</p>
											<Link
												to={`/blog/${relatedPost.slug}`}
												className="block text-base leading-7 font-medium text-foreground transition-colors hover:text-primary"
											>
												{relatedPost.title}
											</Link>
											<p className="text-sm leading-7 text-muted-foreground">
												{relatedPost.description}
											</p>
										</div>
									))}
								</CardContent>
							</Card>
						) : null}
					</aside>
				</div>
			</section>
		</SiteShell>
	);
}
