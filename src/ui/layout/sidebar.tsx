import { A } from "@solidjs/router";
import { Activity, LayoutGrid, Server, Settings } from "lucide-solid";
export const Sidebar = () => {
	return (
		<header class="h-screen w-64 bg-white border-r border-gray-200 flex flex-col">
			<div class="px-5 py-6 text-lg font-semibold flex items-center gap-2">
				<LayoutGrid />
				Serv
			</div>

			<nav class="flex-1 px-2 space-y-2">
				<A
					href="/"
					class="flex items-center gap-2 px-3 py-2 rounded-lg  text-gray-900 font-medium"
					activeClass="bg-gray-100"
				>
					<Server />
					Servicios
				</A>

				<A
					href="/services/overview"
					class="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-medium"
					activeClass="text-emerald-500"
				>
					<Activity />
					Monitoreo
				</A>

				<A
					href="/config"
					class="flex items-center gap-2 px-3 py-2 rounded-lg text-gray-600 hover:bg-gray-100 hover:text-gray-900 font-medium"
				>
					<Settings />
					Configuración
				</A>
			</nav>
		</header>
	);
};
