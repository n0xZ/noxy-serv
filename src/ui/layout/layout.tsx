import { Search } from "lucide-solid";
import { Sidebar } from "./sidebar";
import type { RouteSectionProps } from "@solidjs/router";
const AppLayout = (props: RouteSectionProps) => {
	return (
		<div class="flex">
			<Sidebar />
			<main class="flex-1  overflow-y-auto">
				<aside class="flex items-center justify-between p-5  border-b-2 border-gray-200">
					<div class="flex items-center w-full max-w-md">
						<div class="relative w-full">
							<Search class="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
							<input
								type="text"
								placeholder="Buscar servicios..."
								class="w-full pl-10 pr-3 py-2 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
							/>
						</div>
					</div>
					<button
						class="ml-4 flex items-center gap-2 px-3 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 "
						type="button"
					>
						asd
					</button>
				</aside>

				<section class="flex-1 p-6 overflow-y-auto"> {props.children}</section>
			</main>
		</div>
	);
};
export default AppLayout;
