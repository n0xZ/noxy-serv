/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from '@solidjs/router'
import App from "./App";
import "./tailwind.css";

import { QueryClientProvider, QueryClient } from "@tanstack/solid-query";
const queryClient = new QueryClient();
render(() =>
    <QueryClientProvider client={queryClient}>
        <Router>
            <App />
        </Router>
    </QueryClientProvider>
    , document.getElementById("root") as HTMLElement);
