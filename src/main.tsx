import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./css/styles.css";
import App from "./App.tsx";
import { ThemeProvider } from "./components/theme-provider.tsx";
import "./lib/i18n.ts";

const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			refetchOnWindowFocus: false,
			retry: 1,
		},
	},
});

const rootElement = document.getElementById("root");
if (rootElement) {
	createRoot(rootElement).render(
		<StrictMode>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider defaultTheme="light" storageKey="kiranab-spring-theme">
					<BrowserRouter>
						<App />
					</BrowserRouter>
				</ThemeProvider>
			</QueryClientProvider>
		</StrictMode>
	);
}
