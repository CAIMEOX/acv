export type MesaSurface = {
	top_material?: string;
	mid_material?: string;
	sea_floor_material?: 'string' | 'boolean';
	foundation_material?: string;
	sea_material?: string;
	sea_floor_depth?: number;
	clay_material?: string;
	hard_clay_material?: string;
	bryce_pillars?: boolean;
	has_forest?: boolean;
};
