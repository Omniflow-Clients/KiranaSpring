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
		<Card className="group border-border/70 bg-card/80 transition-transform duration-200 hover:-translate-y-1 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/10">
			<CardHeader className="space-y-4">
				<div className="flex items-center justify-between gap-3">
					<Badge variant={featured ? "default" : "secondary"} className="rounded-full px-3 py-1">
						{post.category}
					</Badge>
					{post.featured ? (
						<span className="text-xs font-medium tracking-[0.18em] text-primary uppercase">
							Unggulan
						</span>
					) : null}
				</div>
				<div className="space-y-3">
					<CardTitle className="text-2xl leading-tight">{post.title}</CardTitle>
					<CardDescription className="text-sm leading-7">{post.description}</CardDescription>
				</div>
			</CardHeader>
			<CardContent className="space-y-5">
				<PostMeta
					date={post.formattedDate}
					readingTimeMinutes={post.readingTimeMinutes}
					author={post.author}
				/>
				<div className="flex flex-wrap gap-2">
					{post.tags.map((tag) => (
						<Badge key={tag} variant="outline" className="rounded-full px-3 py-1 text-xs">
							{tag}
						</Badge>
					))}
				</div>
				<Button asChild variant="ghost" className="px-0">
					<Link to={`/blog/${post.slug}`}>
						Baca artikel
						<ArrowRight className="size-4" />
					</Link>
				</Button>
			</CardContent>
		</Card>
	);
}
