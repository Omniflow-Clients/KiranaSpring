import { Routes, Route } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { LanguageSwitcher } from "@/components/language-switcher";

function HomePage() {
	return (
		<div className="min-h-svh bg-white dark:bg-gray-950">
			<nav className="border-b px-6 py-4">
				<div className="mx-auto flex max-w-6xl items-center justify-between">
					<h1 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
						KiranaSpring
					</h1>
					<div className="flex items-center gap-2">
						<LanguageSwitcher />
						<ModeToggle />
					</div>
				</div>
			</nav>

			<main className="mx-auto max-w-6xl px-6">
				<section className="py-20 md:py-28">
					<p className="mb-3 text-sm font-medium uppercase tracking-widest text-pink-600 dark:text-pink-400">
						Precision Spring Manufacturing
					</p>
					<h1 className="mb-6 text-3xl font-medium tracking-tight text-gray-900 md:text-4xl dark:text-white">
						Engineering Excellence<br />
						in Every Coil
					</h1>
					<p className="mb-10 max-w-xl text-base leading-relaxed text-gray-500 dark:text-gray-400">
						We manufacture high-quality compression, tension, torsion, and custom springs
						for automotive, industrial, and consumer applications.
					</p>
					<div className="flex items-center gap-3">
						<Button size="lg">Our Products</Button>
						<Button variant="outline" size="lg">Contact Us</Button>
					</div>
				</section>

				<section className="grid gap-6 pb-20 md:grid-cols-3">
					<Card className="border-gray-200 dark:border-gray-800">
						<CardHeader className="pb-3">
							<CardTitle className="text-base text-gray-900 dark:text-white">
								Compression Springs
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
								Standard and custom compression springs for heavy-duty and precision applications.
							</p>
						</CardContent>
					</Card>

					<Card className="border-gray-200 dark:border-gray-800">
						<CardHeader className="pb-3">
							<CardTitle className="text-base text-gray-900 dark:text-white">
								Tension Springs
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
								Reliable tension springs engineered for consistent pull force and extended service life.
							</p>
						</CardContent>
					</Card>

					<Card className="border-gray-200 dark:border-gray-800">
						<CardHeader className="pb-3">
							<CardTitle className="text-base text-gray-900 dark:text-white">
								Torsion Springs
							</CardTitle>
						</CardHeader>
						<CardContent>
							<p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
								Precision torsion springs for rotational force requirements across various industries.
							</p>
						</CardContent>
					</Card>
				</section>
			</main>

			<footer className="border-t px-6 py-8 text-center text-sm text-gray-400 dark:text-gray-500">
				&copy; 2026 KiranaSpring. All rights reserved.
			</footer>
		</div>
	);
}

function App() {
	return (
		<Routes>
			<Route path="/" element={<HomePage />} />
		</Routes>
	);
}

export default App;
