import { Database } from "lucide-solid";
import { Show } from "solid-js";
import type { Service } from "~/src/types";

type Props = {
	service: Service;
};
const OnlineBadge = () => {
	return <span class="bg-emerald-500 p-1 rounded-full text-white font-medium shadow-[0_0_15px_rgba(16,185,129,0.8)]">	</span>;
};
const OfflineBadge = () => {
	return <span class="bg-red-500 p-1 rounded-full text-white font-medium shadow-[0_0_15px_rgba(239,68,68,0.8)]"></span>;
};
export const ServiceItem = (props: Props) => {
	const status: "ONLINE" | "OFFLINE" = "OFFLINE";
	return (
		<div class="flex flex-col gap-4 p-4  rounded-lg shadow-sm">
			<div class="flex flex-row items-center justify-between ">
				<div class="flex flex-row items-center gap-2">
				<Database />
				<h2 class="text-lg font-semibold">{props.service.name}</h2>
				</div>
				
				<Show when={status==="OFFLINE"} fallback={<OfflineBadge/>}>
					<OnlineBadge/>
				</Show>
			</div>

			{/* Info */}
			<div class="text-sm text-gray-700 flex flex-col gap-1">
				<p>
					<span class="font-medium">DB:</span> {props.service.driver}
				</p>
				<p>
					<span class="font-medium">Plataforma:</span> {props.service.platform}
				</p>
				<p>
					<span class="font-medium">Región:</span> {props.service.region}
				</p>
			</div>

			<div class="flex justify-between border-t pt-3 text-sm">
				<button class="text-blue-600 hover:underline" type="button">
					Detalles
				</button>
				<button class="text-blue-600 hover:underline" type="button">
					Conectar
				</button>
			</div>
		</div>
	);
};
