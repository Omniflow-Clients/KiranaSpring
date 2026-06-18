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
			let scrollFrame = 0;
			const layoutFrame = window.requestAnimationFrame(() => {
				scrollFrame = window.requestAnimationFrame(() => {
					const target = document.getElementById(hash.replace("#", ""));
					if (!target) {
						return;
					}

					const headerHeight =
						document.querySelector("header")?.getBoundingClientRect().height ??
						0;
					const targetTop = target.getBoundingClientRect().top + window.scrollY;

					window.scrollTo({
						top: Math.max(targetTop - headerHeight - 8, 0),
						left: 0,
						behavior: "smooth",
					});
				});
			});

			return () => {
				window.cancelAnimationFrame(layoutFrame);
				window.cancelAnimationFrame(scrollFrame);
			};
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
