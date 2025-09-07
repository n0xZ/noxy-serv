type Driver = "Postgre" | "MySQL" | "MariaDB" | "SQLite" | "MongoDB";
export type Registry = {
	service_id: string;
	status: "ONLINE" | "OFFLINE";
	created_at: Date;
};
export type Service = {
	id: string;
	name: string;
	platform: string;
	region: string;
	driver: Driver;
	registries: Registry[];
};

export type ServerResponse = {
	status: boolean;
	error?: string;
	data?: Service[];
};
