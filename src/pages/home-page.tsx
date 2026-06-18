import { BlogSection } from "@/components/home/blog-section";
import { CompanyProfileSection } from "@/components/home/company-profile-section";
import { ContactSection } from "@/components/home/contact-section";
import { CtaSection } from "@/components/home/cta-section";
import { GalvanizingSection } from "@/components/home/galvanizing-section";
import { HeroSection } from "@/components/home/hero-section";
import { IndustriesSection } from "@/components/home/industries-section";
import { ProductionProcessSection } from "@/components/home/production-process-section";
import { ProductsSection } from "@/components/home/products-section";
import { SiteShell } from "@/layouts/site-shell";
import { getFeaturedBlogPosts } from "@/lib/blog";

const featuredPosts = getFeaturedBlogPosts(2);

export function HomePage() {
	return (
		<SiteShell>
			<HeroSection />
			<CompanyProfileSection />
			<ProductsSection />
			<GalvanizingSection />
			<IndustriesSection />
			<ProductionProcessSection />
			<CtaSection />
			<BlogSection featuredPosts={featuredPosts} />
			<ContactSection />
		</SiteShell>
	);
}
