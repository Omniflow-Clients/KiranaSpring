import { lazy, Suspense, type ReactNode } from "react";
import {
	ArrowRight,
	Boxes,
	CalendarDays,
	ChevronLeft,
	Clock3,
	Factory,
	Gauge,
	Mail,
	MapPin,
	NotebookText,
	PhoneCall,
	Ruler,
	Settings2,
	ShieldCheck,
	Wrench,
} from "lucide-react";
import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import { ModeToggle } from "@/components/mode-toggle";
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
	getAllBlogPosts,
	getBlogPostBySlug,
	getFeaturedBlogPosts,
	getRelatedBlogPosts,
} from "@/lib/blog";

const allPosts = getAllBlogPosts();
const featuredPosts = getFeaturedBlogPosts(2);
const BlogMarkdown = lazy(async () => {
	const module = await import("@/components/blog-markdown");
	return { default: module.BlogMarkdown };
});

const productLines = [
	{
		title: "Compression Spring",
		description:
			"Pegas tekan untuk kebutuhan gaya dorong, penahan beban, dan stabilitas mekanisme.",
		accent: "Umum dipakai pada sistem yang butuh respons tekan yang konsisten.",
	},
	{
		title: "Tension Spring",
		description:
			"Pegas tarik untuk mekanisme pembuka, pengunci, penarik, dan aplikasi dengan gaya tarik awal.",
		accent: "Cocok untuk aplikasi yang sensitif terhadap initial tension.",
	},
	{
		title: "Torsion Spring",
		description:
			"Pegas torsi untuk gerak putar, engsel, clamp, dan kebutuhan rotational force lainnya.",
		accent: "Bisa disesuaikan pada arah putaran, kaki, dan sudut kerja.",
	},
	{
		title: "Wire Form Custom",
		description:
			"Komponen bentukan kawat custom untuk fixture, retaining part, dan kebutuhan bentuk spesifik.",
		accent: "Relevan untuk part yang tidak cocok memakai komponen standar.",
	},
] as const;

const capabilityHighlights = [
	{
		icon: Ruler,
		title: "Review spesifikasi",
		description:
			"Mulai dari gambar kerja, gaya, dimensi, material, sampai batas kerja yang dibutuhkan.",
	},
	{
		icon: Settings2,
		title: "Sampling dan trial",
		description:
			"Pendekatan bertahap untuk validasi bentuk dan performa sebelum kebutuhan produksi penuh.",
	},
	{
		icon: Factory,
		title: "Produksi terarah",
		description:
			"Fokus pada repeatability proses untuk menjaga hasil yang lebih stabil antar batch.",
	},
	{
		icon: ShieldCheck,
		title: "Quality control",
		description:
			"Pemeriksaan dimensi dan konsistensi sebagai dasar menjaga kualitas komponen pegas.",
	},
] as const;

const industrySegments = [
	"Otomotif",
	"Elektronik",
	"Home appliance",
	"Perakitan mesin",
	"Hardware industrial",
	"Komponen custom OEM",
] as const;

function formatReadingTime(minutes: number) {
	return `${minutes} menit baca`;
}

function SiteShell({ children }: { children: ReactNode }) {
	return (
		<div className="min-h-svh bg-background text-foreground">
			<header className="sticky top-0 z-20 border-b border-border/70 bg-background/85 backdrop-blur">
				<div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-4">
					<Link className="flex items-center gap-3" to="/">
						<div className="flex size-10 items-center justify-center rounded-full border border-border/70 bg-card text-sm font-semibold tracking-[0.22em] text-primary">
							KS
						</div>
						<div>
							<p className="text-sm font-semibold tracking-[0.18em] text-foreground uppercase">
								KiranaSpring
							</p>
							<p className="text-xs text-muted-foreground">
								Spring manufacturing company profile
							</p>
						</div>
					</Link>

					<div className="flex items-center gap-2">
						<nav className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/80 p-1 md:flex">
							<HomeAnchor href="/#produk">Produk</HomeAnchor>
							<HomeAnchor href="/#kapabilitas">Kapabilitas</HomeAnchor>
							<NavItem to="/blog">Blog</NavItem>
						</nav>
						<Button asChild size="sm" className="hidden md:inline-flex">
							<a href="/#kontak">Hubungi Kami</a>
						</Button>
						<ModeToggle />
					</div>
				</div>
			</header>

			<main>{children}</main>

			<footer className="border-t border-border/70 bg-card/60">
				<div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row md:items-center md:justify-between">
					<p>KiranaSpring adalah website company profile manufaktur pegas dengan blog sebagai kanal insight pendukung.</p>
					<p>&copy; 2026 KiranaSpring</p>
				</div>
			</footer>
		</div>
	);
}

function HomeAnchor({
	href,
	children,
}: {
	href: string;
	children: ReactNode;
}) {
	return (
		<a
			href={href}
			className="rounded-full px-4 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
		>
			{children}
		</a>
	);
}

function NavItem({ to, children }: { to: string; children: ReactNode }) {
	return (
		<NavLink
			to={to}
			className={({ isActive }) =>
				[
					"rounded-full px-4 py-2 text-sm transition-colors",
					isActive
						? "bg-primary text-primary-foreground"
						: "text-muted-foreground hover:text-foreground",
				].join(" ")
			}
		>
			{children}
		</NavLink>
	);
}

function HomePage() {
	return (
		<SiteShell>
			<section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)] md:py-24">
				<div className="space-y-8">
					<Badge
						variant="outline"
						className="rounded-full border-primary/20 bg-primary/8 px-4 py-1 text-[0.7rem] tracking-[0.2em] text-primary uppercase"
					>
						Manufacturer Pegas dan Bentuk Kawat
					</Badge>
					<div className="space-y-5">
						<h1 className="max-w-3xl text-4xl leading-tight font-semibold tracking-tight text-foreground md:text-6xl">
							Company profile KiranaSpring untuk kebutuhan compression, tension, torsion, dan wire form custom.
						</h1>
						<p className="max-w-2xl text-base leading-8 text-muted-foreground md:text-lg">
							Fokus utama website ini adalah menampilkan perusahaan spring manufacturing:
							lini produk, kapabilitas kerja, dan pendekatan produksi. Blog tetap ada, tapi
							sebagai fitur pendukung untuk insight teknis dan edukasi pasar.
						</p>
					</div>
					<div className="flex flex-wrap gap-3">
						<Button asChild size="lg">
							<a href="#produk">
								Lihat Produk
								<ArrowRight className="size-4" />
							</a>
						</Button>
						<Button asChild variant="outline" size="lg">
							<a href="#kontak">Diskusikan Kebutuhan</a>
						</Button>
					</div>
					<div className="flex flex-wrap gap-2">
						{["Compression", "Tension", "Torsion", "Wire Form"].map((label) => (
							<Badge key={label} variant="outline" className="rounded-full px-3 py-1">
								{label}
							</Badge>
						))}
					</div>
				</div>

				<Card className="border-border/70 bg-card/80 shadow-lg shadow-primary/5">
					<CardHeader className="space-y-4">
						<div className="flex items-center justify-between gap-3">
							<Badge variant="secondary" className="rounded-full px-3 py-1">
								Fokus Company Profile
							</Badge>
							<Boxes className="size-5 text-primary" />
						</div>
						<CardTitle className="text-2xl">Yang ditonjolkan ke calon klien bukan hanya artikelnya.</CardTitle>
						<CardDescription className="text-sm leading-7">
							Halaman utama sekarang diarahkan untuk menjelaskan apa yang KiranaSpring buat,
							bagaimana pendekatan kerjanya, dan untuk kebutuhan industri seperti apa.
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-4 text-sm text-muted-foreground">
						<div className="rounded-2xl border border-border/70 bg-background/80 p-4">
							<div className="space-y-3">
								<div className="flex items-start gap-3">
									<Factory className="mt-0.5 size-4 text-primary" />
									<p>Produk pegas dan wire form custom menjadi inti company profile.</p>
								</div>
								<div className="flex items-start gap-3">
									<Gauge className="mt-0.5 size-4 text-primary" />
									<p>Kapabilitas produksi dan quality control membangun kepercayaan buyer.</p>
								</div>
								<div className="flex items-start gap-3">
									<NotebookText className="mt-0.5 size-4 text-primary" />
									<p>Blog hadir sebagai pelengkap edukasi teknis dan dukungan SEO.</p>
								</div>
							</div>
						</div>
						<p>
							Positioning-nya jadi jelas: ini web compro perusahaan spring yang kebetulan punya blog,
							bukan blog yang kebetulan menyinggung spring.
						</p>
					</CardContent>
				</Card>
			</section>

			<section id="produk" className="border-y border-border/70 bg-card/50">
				<div className="mx-auto max-w-6xl px-6 py-14">
					<div className="mb-8 max-w-3xl">
						<p className="mb-3 text-sm font-medium tracking-[0.22em] text-primary uppercase">
							Lini Produk
						</p>
						<h2 className="text-3xl font-semibold tracking-tight">
							Jenis pegas dan komponen kawat yang relevan untuk ditampilkan di website company profile.
						</h2>
					</div>

					<div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
						{productLines.map((product) => (
							<Card key={product.title} className="border-border/70 bg-background/75">
								<CardHeader className="space-y-4">
									<Badge variant="secondary" className="w-fit rounded-full px-3 py-1">
										Produk
									</Badge>
									<div className="space-y-3">
										<CardTitle className="text-xl leading-tight">{product.title}</CardTitle>
										<CardDescription className="text-sm leading-7">
											{product.description}
										</CardDescription>
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-sm leading-7 text-muted-foreground">{product.accent}</p>
								</CardContent>
							</Card>
						))}
					</div>
				</div>
			</section>

			<section id="kapabilitas" className="mx-auto max-w-6xl px-6 py-16">
				<div className="mb-8 max-w-3xl">
					<p className="mb-3 text-sm font-medium tracking-[0.22em] text-primary uppercase">
						Kapabilitas
					</p>
					<h2 className="text-3xl font-semibold tracking-tight">
						Struktur homepage yang lebih cocok untuk buyer, procurement, dan calon partner produksi.
					</h2>
				</div>

				<div className="grid gap-6 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
					<div className="grid gap-5 md:grid-cols-2">
						{capabilityHighlights.map((item) => (
							<FeatureCard
								key={item.title}
								icon={item.icon}
								title={item.title}
								description={item.description}
							/>
						))}
					</div>

					<Card className="border-border/70 bg-card/80">
						<CardHeader className="space-y-4">
							<div className="flex items-center gap-3">
								<div className="flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
									<Wrench className="size-5" />
								</div>
								<div>
									<CardTitle className="text-xl">Alur kerja singkat</CardTitle>
									<CardDescription>Copy seperti ini lebih pas untuk website compro B2B.</CardDescription>
								</div>
							</div>
						</CardHeader>
						<CardContent className="space-y-4">
							<div className="rounded-2xl border border-border/70 bg-background/80 p-4">
								<ol className="space-y-3 text-sm leading-7 text-muted-foreground">
									<li>1. Diskusi kebutuhan aplikasi, gaya kerja, material, dan batas dimensi.</li>
									<li>2. Review desain atau gambar teknik sebelum sample dan trial.</li>
									<li>3. Lanjut ke produksi setelah spesifikasi dan evaluasi sampel sesuai.</li>
									<li>4. Blog dipakai untuk melengkapi edukasi teknis dan membantu organic search.</li>
								</ol>
							</div>
						</CardContent>
					</Card>
				</div>
			</section>

			<section className="border-y border-border/70 bg-card/50">
				<div className="mx-auto max-w-6xl px-6 py-16">
					<div className="mb-8 max-w-3xl">
						<p className="mb-3 text-sm font-medium tracking-[0.22em] text-primary uppercase">
							Industri yang Dilayani
						</p>
						<h2 className="text-3xl font-semibold tracking-tight">
							Website compro tetap bisa terasa spesifik tanpa harus terlalu sempit dalam narasi.
						</h2>
					</div>

					<div className="flex flex-wrap gap-3">
						{industrySegments.map((segment) => (
							<Badge key={segment} variant="outline" className="rounded-full px-4 py-2 text-sm">
								{segment}
							</Badge>
						))}
					</div>
				</div>
			</section>

			<section className="mx-auto max-w-6xl px-6 py-16">
				<div className="mb-8 flex items-end justify-between gap-4">
					<div>
						<p className="mb-3 text-sm font-medium tracking-[0.22em] text-primary uppercase">
							Blog Pendukung
						</p>
						<h2 className="text-3xl font-semibold tracking-tight">
							Blog tetap hidup untuk insight teknis, edukasi buyer, dan SEO.
						</h2>
						<p className="mt-3 max-w-2xl text-base leading-8 text-muted-foreground">
							Kontennya masih dikelola dari Markdown, tapi posisinya sekarang sebagai fitur
							pelengkap dari website company profile KiranaSpring.
						</p>
					</div>
					<Button asChild variant="ghost">
						<Link to="/blog">
							Semua artikel
							<ArrowRight className="size-4" />
						</Link>
					</Button>
				</div>

				<div className="grid gap-6 md:grid-cols-2">
					{featuredPosts.map((post) => (
						<PostCard key={post.slug} post={post} featured />
					))}
				</div>
			</section>

			<section id="kontak" className="border-t border-border/70 bg-card/60">
				<div className="mx-auto grid max-w-6xl gap-6 px-6 py-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(320px,0.9fr)]">
					<div className="space-y-4">
						<p className="text-sm font-medium tracking-[0.22em] text-primary uppercase">
							Kontak dan Inquiry
						</p>
						<h2 className="text-3xl font-semibold tracking-tight">
							Bagian ini menjadi titik masuk untuk penawaran dan diskusi spesifikasi.
						</h2>
						<p className="max-w-2xl text-base leading-8 text-muted-foreground">
							Untuk finalisasi website compro, section ini sebaiknya nanti diisi nomor sales,
							email resmi, dan alamat perusahaan. Saat ini saya arahkan dulu struktur dan copy-nya
							supaya fokus websitenya sudah tepat.
						</p>
					</div>

					<div className="grid gap-4">
						<ContactPromptCard
							icon={PhoneCall}
							title="Diskusi kebutuhan produk"
							description="Cocok untuk inquiry compression, tension, torsion, atau wire form custom."
						/>
						<ContactPromptCard
							icon={Mail}
							title="Kirim gambar teknik"
							description="Bisa diarahkan untuk RFQ, gambar kerja, atau spesifikasi dimensi awal."
						/>
						<ContactPromptCard
							icon={MapPin}
							title="Informasi lokasi perusahaan"
							description="Tempat yang tepat untuk menaruh alamat pabrik, kantor, atau area operasional."
						/>
					</div>
				</div>
			</section>
		</SiteShell>
	);
}

function FeatureCard({
	icon: Icon,
	title,
	description,
}: {
	icon: typeof Factory;
	title: string;
	description: string;
}) {
	return (
		<Card className="border-border/70 bg-background/70">
			<CardHeader className="space-y-4">
				<div className="flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
					<Icon className="size-5" />
				</div>
				<div className="space-y-2">
					<CardTitle className="text-lg">{title}</CardTitle>
					<CardDescription className="text-sm leading-7">{description}</CardDescription>
				</div>
			</CardHeader>
		</Card>
	);
}

function ContactPromptCard({
	icon: Icon,
	title,
	description,
}: {
	icon: typeof Factory;
	title: string;
	description: string;
}) {
	return (
		<Card className="border-border/70 bg-background/80">
			<CardHeader className="space-y-3">
				<div className="flex size-11 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary">
					<Icon className="size-5" />
				</div>
				<div className="space-y-2">
					<CardTitle className="text-lg">{title}</CardTitle>
					<CardDescription className="text-sm leading-7">{description}</CardDescription>
				</div>
			</CardHeader>
		</Card>
	);
}

function BlogIndexPage() {
	return (
		<SiteShell>
			<section className="mx-auto max-w-6xl px-6 py-16 md:py-20">
				<div className="mb-10 max-w-3xl space-y-4">
					<Badge variant="outline" className="rounded-full px-4 py-1 text-primary">
						Daftar Artikel
					</Badge>
					<h1 className="text-4xl font-semibold tracking-tight md:text-5xl">
						Artikel manufaktur, quality control, dan engineering pegas.
					</h1>
					<p className="text-base leading-8 text-muted-foreground md:text-lg">
						Semua artikel di halaman ini diambil dari file Markdown lokal. Kalau nanti mau
						nambah tulisan baru, cukup tambah satu file `.md` lagi.
					</p>
				</div>

				<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
					{allPosts.map((post) => (
						<PostCard key={post.slug} post={post} />
					))}
				</div>
			</section>
		</SiteShell>
	);
}

function PostCard({
	post,
	featured = false,
}: {
	post: ReturnType<typeof getAllBlogPosts>[number];
	featured?: boolean;
}) {
	return (
		<Card className="group border-border/70 bg-card/80 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5">
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

function PostMeta({
	date,
	readingTimeMinutes,
	author,
}: {
	date: string;
	readingTimeMinutes: number;
	author: string;
}) {
	return (
		<div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
			<span className="inline-flex items-center gap-2">
				<CalendarDays className="size-4" />
				{date}
			</span>
			<span className="inline-flex items-center gap-2">
				<Clock3 className="size-4" />
				{formatReadingTime(readingTimeMinutes)}
			</span>
			<span>{author}</span>
		</div>
	);
}

function BlogPostPage() {
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
			<section className="mx-auto max-w-6xl px-6 py-10 md:py-16">
				<Button asChild variant="ghost" className="-ml-4 mb-6">
					<Link to="/blog">
						<ChevronLeft className="size-4" />
						Kembali ke blog
					</Link>
				</Button>

				<div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_300px]">
					<article className="space-y-8">
						<header className="space-y-5">
							<div className="flex flex-wrap items-center gap-3">
								<Badge className="rounded-full px-3 py-1">{post.category}</Badge>
								{post.tags.map((tag) => (
									<Badge key={tag} variant="outline" className="rounded-full px-3 py-1 text-xs">
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

					<aside className="space-y-6">
						<Card className="border-border/70 bg-card/80">
							<CardHeader className="space-y-3">
								<CardTitle className="text-lg">Tentang format konten</CardTitle>
								<CardDescription className="leading-7">
									Halaman ini dirender dari Markdown lokal, jadi proses edit artikel bisa
									tetap dekat dengan code review dan versioning.
								</CardDescription>
							</CardHeader>
						</Card>

						{relatedPosts.length > 0 ? (
							<Card className="border-border/70 bg-card/80">
								<CardHeader className="space-y-3">
									<CardTitle className="text-lg">Artikel terkait</CardTitle>
									<CardDescription>Lanjutan bacaan dari topik yang mirip.</CardDescription>
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

function NotFoundPage() {
	return (
		<SiteShell>
			<section className="mx-auto max-w-3xl px-6 py-20 text-center">
				<Badge variant="outline" className="mb-4 rounded-full px-4 py-1 text-primary">
					Halaman tidak ditemukan
				</Badge>
				<h1 className="mb-4 text-4xl font-semibold tracking-tight">Konten yang dicari belum tersedia.</h1>
				<p className="mx-auto mb-8 max-w-xl text-base leading-8 text-muted-foreground">
					Cek kembali slug artikel atau kembali ke daftar blog untuk melihat semua tulisan yang
					sudah dipublikasikan.
				</p>
				<Button asChild size="lg">
					<Link to="/blog">Kembali ke daftar blog</Link>
				</Button>
			</section>
		</SiteShell>
	);
}

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
			<Route path="/blog" element={<BlogIndexPage />} />
			<Route path="/blog/:slug" element={<BlogPostPage />} />
			<Route path="*" element={<NotFoundPage />} />
		</Routes>
	);
}

export default App;
