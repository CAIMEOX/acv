export type FlipbookTextures = Array<{
	atlas_index?: number;
	atlas_tile?: string;
	atlas_tile_variant?: number;
	blend_frames?: boolean;
	flipbook_texture?: string;
	frames?: Array<number>;
	replicate?: number;
	ticks_per_frame?: number;
}>;
