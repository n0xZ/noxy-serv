import { For, Show } from "solid-js";
import { Service } from "~/src/types";
import { ServiceItem } from "./item";

type Props = {
	services: Service[];
};
const EmptyServicesList = () => {
	return <div>Al parecer, no hay items</div>;
};
export const ServicesList = (props: Props) => {
	return (
		<Show when={props.services.length !== 0} fallback={<EmptyServicesList />}>
			<aside class="grid grid-cols-3 gap-2">
				<For each={props.services}>
					{(service) => <ServiceItem service={service} />}
				</For>
			</aside>
		</Show>
	);
};
