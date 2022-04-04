export interface StatProps {
	name: string;
	value: number;
}

export interface ResourceProps {
	name: string;
	current: number;
	total: number;
	massEdit?: boolean;
}

export interface StatsProps {
	values: number[];
}

export interface QuickProps {
	health: number[];
	humanity: number[];
	luck: number[];
}

export interface SheetProps {}
