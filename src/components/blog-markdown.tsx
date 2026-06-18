import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "@/lib/utils";

export function BlogMarkdown({
	content,
	className,
}: {
	content: string;
	className?: string;
}) {
	return (
		<div className={cn("blog-prose", className)}>
			<ReactMarkdown
				remarkPlugins={[remarkGfm]}
				components={{
					a: ({ ...props }) => (
						<a {...props} target="_blank" rel="noreferrer" />
					),
				}}
			>
				{content}
			</ReactMarkdown>
		</div>
	);
}
