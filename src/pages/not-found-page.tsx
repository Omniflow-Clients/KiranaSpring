import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { SiteShell } from "@/layouts/site-shell";

export function NotFoundPage() {
	return (
		<SiteShell>
			<section className="mx-auto max-w-3xl px-6 py-20 text-center">
				<Badge variant="outline" className="mb-4 rounded-full px-4 py-1 text-primary">
					Halaman tidak ditemukan
				</Badge>
				<h1 className="mb-4 text-4xl font-semibold tracking-tight">
					Konten yang dicari belum tersedia.
				</h1>
				<p className="mx-auto mb-8 max-w-xl text-base leading-8 text-muted-foreground">
					Cek kembali slug artikel atau kembali ke daftar blog untuk melihat semua tulisan
					yang sudah dipublikasikan.
				</p>
				<Button asChild size="lg">
					<Link to="/blog">Kembali ke daftar blog</Link>
				</Button>
			</section>
		</SiteShell>
	);
}
