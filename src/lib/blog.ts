type BlogFrontmatter = {
	title?: string;
	description?: string;
	date?: string;
	author?: string;
	category?: string;
	tags?: string[] | string;
	featured?: boolean;
	slug?: string;
	image?: string;
};

export type BlogPost = {
	slug: string;
	title: string;
	description: string;
	date: string;
	formattedDate: string;
	author: string;
	category: string;
	tags: string[];
	featured: boolean;
	readingTimeMinutes: number;
	content: string;
	image: string;
};

const fallbackBlogImages: Record<string, string> = {
	"cara-memilih-pegas-yang-tepat":
		"https://unsplash.com/photos/6Ips_2SI-qE/download?force=true&w=1400&q=80",
	"tanda-pegas-perlu-diganti":
		"https://unsplash.com/photos/xWUNZVW5JOg/download?force=true&w=1400&q=80",
	"pentingnya-heat-treatment-pada-pegas-industri":
		"https://unsplash.com/photos/Ig5caRi_xBY/download?force=true&w=1400&q=80",
};

const markdownModules = import.meta.glob("../content/blog/*.md", {
	eager: true,
	import: "default",
	query: "?raw",
}) as Record<string, string>;

function parseDate(dateString: string) {
	const [year, month, day] = dateString.split("-").map(Number);

	if (
		!Number.isFinite(year) ||
		!Number.isFinite(month) ||
		!Number.isFinite(day)
	) {
		return new Date(0);
	}

	return new Date(year, month - 1, day);
}

function formatBlogDate(dateString: string) {
	return new Intl.DateTimeFormat("id-ID", {
		day: "numeric",
		month: "long",
		year: "numeric",
	}).format(parseDate(dateString));
}

function estimateReadingTime(content: string) {
	const wordCount = content.trim().split(/\s+/).filter(Boolean).length;
	return Math.max(1, Math.round(wordCount / 180));
}

function stripMarkdown(markdown: string) {
	return markdown
		.replace(/^#{1,6}\s+/gm, "")
		.replace(/```[\s\S]*?```/g, " ")
		.replace(/`([^`]+)`/g, "$1")
		.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
		.replace(/[*_>~-]/g, " ")
		.replace(/\s+/g, " ")
		.trim();
}

function parseFrontmatter(source: string) {
	if (!source.startsWith("---\n")) {
		return { frontmatter: {} as BlogFrontmatter, content: source.trim() };
	}

	const frontmatterEnd = source.indexOf("\n---\n", 4);

	if (frontmatterEnd === -1) {
		return { frontmatter: {} as BlogFrontmatter, content: source.trim() };
	}

	const rawFrontmatter = source.slice(4, frontmatterEnd).split("\n");
	const frontmatter: BlogFrontmatter = {};

	for (const line of rawFrontmatter) {
		const separatorIndex = line.indexOf(":");

		if (separatorIndex === -1) {
			continue;
		}

		const key = line.slice(0, separatorIndex).trim() as keyof BlogFrontmatter;
		const rawValue = line.slice(separatorIndex + 1).trim();
		const unquotedValue = rawValue.replace(/^"(.*)"$/, "$1");

		if (key === "featured") {
			frontmatter.featured = unquotedValue === "true";
			continue;
		}

		frontmatter[key] = unquotedValue;
	}

	return {
		frontmatter,
		content: source.slice(frontmatterEnd + 5).trim(),
	};
}

function normalizeTags(tags: BlogFrontmatter["tags"]) {
	if (Array.isArray(tags)) {
		return tags.map((tag) => tag.trim()).filter(Boolean);
	}

	if (typeof tags === "string") {
		return tags
			.split(",")
			.map((tag) => tag.trim())
			.filter(Boolean);
	}

	return [];
}

function createExcerpt(content: string) {
	const plainText = stripMarkdown(content);
	return plainText.length > 160 ? `${plainText.slice(0, 157)}...` : plainText;
}

function createSlug(filePath: string, frontmatterSlug?: string) {
	if (frontmatterSlug) {
		return frontmatterSlug;
	}

	return filePath.split("/").pop()?.replace(/\.md$/, "") ?? "artikel";
}

function buildBlogPost([filePath, source]: [string, string]): BlogPost {
	const { frontmatter, content } = parseFrontmatter(source);
	const fallbackSlug = createSlug(filePath, frontmatter.slug);

	return {
		slug: fallbackSlug,
		title: frontmatter.title ?? fallbackSlug.replace(/-/g, " "),
		description: frontmatter.description ?? createExcerpt(content),
		date: frontmatter.date ?? "1970-01-01",
		formattedDate: formatBlogDate(frontmatter.date ?? "1970-01-01"),
		author: frontmatter.author ?? "Tim KiranaSpring",
		category: frontmatter.category ?? "Artikel",
		tags: normalizeTags(frontmatter.tags),
		featured: frontmatter.featured ?? false,
		readingTimeMinutes: estimateReadingTime(content),
		content,
		image:
			frontmatter.image ??
			fallbackBlogImages[fallbackSlug] ??
			"https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80",
	};
}

const blogPosts = Object.entries(markdownModules)
	.map(buildBlogPost)
	.sort((firstPost, secondPost) => parseDate(secondPost.date).getTime() - parseDate(firstPost.date).getTime());

export function getAllBlogPosts() {
	return blogPosts;
}

export function getFeaturedBlogPosts(limit = 3) {
	return blogPosts.filter((post) => post.featured).slice(0, limit);
}

export function getBlogPostBySlug(slug: string) {
	return blogPosts.find((post) => post.slug === slug);
}

export function getRelatedBlogPosts(slug: string, limit = 2) {
	const currentPost = getBlogPostBySlug(slug);

	if (!currentPost) {
		return [];
	}

	return blogPosts
		.filter((post) => post.slug !== slug)
		.sort((firstPost, secondPost) => {
			const firstScore = firstPost.tags.filter((tag) => currentPost.tags.includes(tag)).length;
			const secondScore = secondPost.tags.filter((tag) => currentPost.tags.includes(tag)).length;
			return secondScore - firstScore;
		})
		.slice(0, limit);
}
