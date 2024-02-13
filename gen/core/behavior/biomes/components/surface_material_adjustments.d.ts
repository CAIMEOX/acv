import { Number as Number0 } from './../../../molang/number';
export type SurfaceMaterialAdjustments = {
	adjustments?: Array<{
		height_range?: Array<Number0>;
		materials?: {
			top_material?: string;
			mid_material?: string;
			sea_floor_material?: string;
			foundation_material?: string;
			sea_material?: string;
		};
		noise_range?: Array<number>;
	}>;
};
