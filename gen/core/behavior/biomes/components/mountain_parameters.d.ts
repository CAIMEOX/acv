export type MountainParameters = {
	peaks_factor?: number;
	steep_material_adjustment?: {
		material?: string;
		north_slopes?: boolean;
		south_slopes?: boolean;
		west_slopes?: boolean;
		east_slopes?: boolean;
	};
	top_slide?: {
		enabled?: unknown;
	};
};
