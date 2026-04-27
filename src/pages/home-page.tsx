import { getFeaturedBlogPosts } from "@/lib/blog";
import { SiteShell } from "@/layouts/site-shell";
import { BlogSection } from "@/components/home/blog-section";
import { CompanyProfileSection } from "@/components/home/company-profile-section";
import { ContactSection } from "@/components/home/contact-section";
import { HeroSection } from "@/components/home/hero-section";
import { IndustriesSection } from "@/components/home/industries-section";
import { ProductsSection } from "@/components/home/products-section";
import { ProductionProcessSection } from "@/components/home/production-process-section";

const featuredPosts = getFeaturedBlogPosts(2);

export function HomePage() {
	return (
		<SiteShell>
			<HeroSection />
			<CompanyProfileSection />
			<ProductsSection />
			<IndustriesSection />
			<ProductionProcessSection />
			<BlogSection featuredPosts={featuredPosts} />
			<ContactSection />
		</SiteShell>
	);
}
