import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { BlogIndexPage } from "@/pages/blog-index-page";
import { BlogPostPage } from "@/pages/blog-post-page";
import { HomePage } from "@/pages/home-page";
import { NotFoundPage } from "@/pages/not-found-page";

function ScrollToTop() {
	const { pathname, hash } = useLocation();

	useEffect(() => {
		if (!pathname) {
			return;
		}

		if (hash) {
			window.requestAnimationFrame(() => {
				const target = document.getElementById(hash.replace("#", ""));
				if (!target) {
					return;
				}

				target.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			});
			return;
		}

		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth",
		});
	}, [pathname, hash]);

	return null;
}

function App() {
	return (
		<>
			<ScrollToTop />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/blog" element={<BlogIndexPage />} />
				<Route path="/blog/:slug" element={<BlogPostPage />} />
				<Route path="*" element={<NotFoundPage />} />
			</Routes>
		</>
	);
}

export default App;
