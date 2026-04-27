import { Route, Routes } from "react-router-dom";
import { BlogIndexPage } from "@/pages/blog-index-page";
import { BlogPostPage } from "@/pages/blog-post-page";
import { HomePage } from "@/pages/home-page";
import { NotFoundPage } from "@/pages/not-found-page";

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
