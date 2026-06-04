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
			<section className="w-full bg-[#e7e7e5] px-6 py-10 md:py-14 lg:px-10 xl:px-14">
				<div className="mx-auto w-full max-w-[1520px] space-y-8">
					<Button
						asChild
						variant="ghost"
						className="rounded-full border border-[#cdd8ff] bg-white/82 px-5 text-[#1d3d9f] shadow-[0_12px_28px_rgba(80,100,170,0.08)] hover:bg-white"
					>
						<Link to="/blog">
							<ChevronLeft className="size-4" />
							Kembali ke blog
						</Link>
					</Button>

					<div className="grid gap-10 xl:grid-cols-[minmax(0,1.35fr)_380px] xl:items-start">
						<article className="space-y-8">
							<header className="space-y-5">
								<div className="rounded-[2rem] border border-[#cdd8ff] bg-white px-5 py-6 shadow-[0_24px_48px_rgba(80,100,170,0.09)] sm:px-6 sm:py-7 md:rounded-[2.5rem] md:px-8 md:py-8 lg:px-10">
									<div className="mb-4 flex flex-wrap items-center gap-3">
										<Badge className="rounded-full bg-[#2348d8] px-4 py-1.5 text-white hover:bg-[#2348d8]">
											{post.category}
										</Badge>
										{post.tags.map((tag) => (
											<Badge
												key={tag}
												variant="outline"
												className="rounded-full border-[#cdd8ff] bg-[#f6f8ff] px-3 py-1 text-xs text-[#2348d8]"
											>
												{tag}
											</Badge>
										))}
									</div>
									<div className="max-w-4xl space-y-4">
										<h1 className="font-heading text-[2rem] leading-[1.08] font-semibold tracking-tight text-[#1d3d9f] sm:text-[2.4rem] md:text-5xl xl:text-[3.65rem]">
											{post.title}
										</h1>
										<p className="max-w-3xl text-base leading-7 text-[#66729f] sm:text-lg sm:leading-8">
											{post.description}
										</p>
									</div>
									<PostMeta
										date={post.formattedDate}
										readingTimeMinutes={post.readingTimeMinutes}
										author={post.author}
										className="mt-5 text-[#66729f] [&_svg]:text-[#2348d8]"
									/>
								</div>

								<div className="overflow-hidden rounded-[2rem] border border-[#cdd8ff] bg-white shadow-[0_24px_48px_rgba(80,100,170,0.09)] md:rounded-[2.5rem]">
									<div className="relative aspect-[16/10] overflow-hidden bg-[#2348d8]/12 md:aspect-[16/8]">
										<img
											src={post.image}
											alt={post.title}
											className="h-full w-full object-cover"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-[#112763]/40 via-[#112763]/8 to-transparent" />
									</div>
								</div>
							</header>

							<Card className="overflow-hidden rounded-[2.5rem] border border-[#cdd8ff] bg-white py-0 shadow-[0_24px_48px_rgba(80,100,170,0.08)]">
								<CardContent className="px-0">
									<div className="border-b border-[#d9e2ff] bg-[linear-gradient(135deg,rgba(35,72,216,0.09),rgba(255,255,255,0.85)_44%,rgba(35,72,216,0.05))] px-6 py-5 md:px-10">
										<p className="text-sm font-medium tracking-[0.22em] text-[#2348d8] uppercase">
											Insight Teknis
										</p>
									</div>
									<Suspense
										fallback={
											<div className="px-6 py-8 text-sm text-muted-foreground md:px-10">
												Memuat artikel...
											</div>
										}
									>
										<BlogMarkdown
											className="blog-prose px-6 py-8 md:px-10 md:py-10"
											content={post.content}
										/>
									</Suspense>
								</CardContent>
							</Card>
						</article>

						<aside className="space-y-6 xl:sticky xl:top-28">
							<Card className="rounded-[2rem] border border-[#cdd8ff] bg-white/92 shadow-[0_18px_36px_rgba(80,100,170,0.08)]">
								<CardHeader className="space-y-3">
									<CardTitle className="text-xl text-[#1d3d9f]">
										Ringkasan artikel
									</CardTitle>
									<CardDescription className="leading-7 text-[#66729f]">
										Materi ini dirancang sebagai referensi cepat untuk tim engineering,
										quality control, dan maintenance yang butuh konteks teknis secara
										ringkas.
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-5 text-[#66729f]">
									<div className="rounded-[1.5rem] bg-[#eef2ff] p-5">
										<p className="mb-2 text-xs font-semibold tracking-[0.18em] text-[#2348d8] uppercase">
											Fokus topik
										</p>
										<div className="flex flex-wrap gap-2">
											{post.tags.map((tag) => (
												<Badge
													key={tag}
													variant="outline"
													className="rounded-full border-[#cdd8ff] bg-white px-3 py-1 text-xs text-[#2348d8]"
												>
													{tag}
												</Badge>
											))}
										</div>
									</div>
									<div className="rounded-[1.5rem] border border-dashed border-[#cdd8ff] p-5">
										<p className="text-sm leading-7">
											Cocok dibaca saat Anda sedang membandingkan opsi pegas, meninjau
											risiko produksi, atau menyusun checklist inspeksi internal.
										</p>
									</div>
								</CardContent>
							</Card>

							{relatedPosts.length > 0 ? (
								<Card className="rounded-[2rem] border border-[#cdd8ff] bg-white/92 shadow-[0_18px_36px_rgba(80,100,170,0.08)]">
									<CardHeader className="space-y-3">
										<CardTitle className="text-xl text-[#1d3d9f]">
											Artikel terkait
										</CardTitle>
										<CardDescription className="text-[#66729f]">
											Lanjutan bacaan dengan topik yang berdekatan.
										</CardDescription>
									</CardHeader>
									<CardContent className="space-y-5">
										{relatedPosts.map((relatedPost) => (
											<Link
												key={relatedPost.slug}
												to={`/blog/${relatedPost.slug}`}
												className="group block overflow-hidden rounded-[1.5rem] border border-[#d7e0ff] bg-[#f7f9ff] transition-colors hover:bg-white"
											>
												<div className="aspect-[16/10] overflow-hidden">
													<img
														src={relatedPost.image}
														alt={relatedPost.title}
														className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
													/>
												</div>
												<div className="space-y-2 p-5">
													<p className="text-xs font-medium tracking-[0.18em] text-[#2348d8] uppercase">
														{relatedPost.category}
													</p>
													<p className="text-base leading-7 font-semibold text-[#1d3d9f] transition-colors group-hover:text-[#2348d8]">
														{relatedPost.title}
													</p>
													<p className="text-sm leading-7 text-[#66729f]">
														{relatedPost.description}
													</p>
												</div>
											</Link>
										))}
									</CardContent>
								</Card>
							) : null}
						</aside>
					</div>
				</div>
			</section>
		</SiteShell>
	);
}
