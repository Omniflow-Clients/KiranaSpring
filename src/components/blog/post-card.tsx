import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import type { BlogPost } from "@/lib/blog";
import { PostMeta } from "@/components/blog/post-meta";

export function PostCard({
	post,
	featured = false,
}: {
	post: BlogPost;
	featured?: boolean;
}) {
	return (
		<Card className="group gap-0 overflow-hidden rounded-[2rem] border border-[#cdd8ff] bg-white/92 py-0 shadow-[0_18px_36px_rgba(80,100,170,0.08)] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[0_24px_46px_rgba(80,100,170,0.12)]">
			<Link
				to={`/blog/${post.slug}`}
				aria-label={`Buka artikel ${post.title}`}
				className="block focus-visible:outline-none"
			>
				<div className="relative aspect-[16/10] overflow-hidden bg-[#2348d8]/10">
					<img
						src={post.image}
						alt={post.title}
						loading="lazy"
						className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-[#0f1f58]/60 via-transparent to-transparent" />
					<div className="absolute right-5 bottom-5 left-5 flex items-end justify-between gap-3">
						<Badge
							variant={featured ? "default" : "secondary"}
							className="rounded-full bg-[#2348d8] px-4 py-1.5 text-white hover:bg-[#2348d8]"
						>
							{post.category}
						</Badge>
						{post.featured ? (
							<span className="rounded-full bg-white/92 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-[#2348d8] uppercase">
								Unggulan
							</span>
						) : null}
					</div>
				</div>
			</Link>
			<CardHeader className="space-y-4 px-7 pt-7">
				<div className="space-y-3">
					<CardTitle className="text-2xl leading-tight text-[#1d3d9f]">
						<Link
							to={`/blog/${post.slug}`}
							className="transition-colors hover:text-[#2348d8] focus-visible:outline-none"
						>
							{post.title}
						</Link>
					</CardTitle>
					<CardDescription className="text-base leading-8 text-[#6b78a5]">
						{post.description}
					</CardDescription>
				</div>
			</CardHeader>
			<CardContent className="space-y-5 px-7 pb-7 text-[#6b78a5]">
				<PostMeta
					date={post.formattedDate}
					readingTimeMinutes={post.readingTimeMinutes}
					author={post.author}
				/>
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
				<Button asChild variant="ghost" className="px-0 text-[#1d3d9f] hover:bg-transparent hover:text-[#2348d8]">
					<Link to={`/blog/${post.slug}`}>
						Baca artikel
						<ArrowRight className="size-4" />
					</Link>
				</Button>
			</CardContent>
		</Card>
	);
}
