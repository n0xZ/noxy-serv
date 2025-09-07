/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import App from "./App";
import "./tailwind.css";
import { QueryClientProvider, QueryClient } from "@tanstack/solid-query";
import AppLayout from "./ui/layout/layout";

const queryClient = new QueryClient();

render(
	() => (
		<QueryClientProvider client={queryClient}>
			<Router root={AppLayout}>
				<App />
			</Router>
		</QueryClientProvider>
	),
	document.getElementById("root") as HTMLElement,
);
