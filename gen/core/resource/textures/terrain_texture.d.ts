export declare namespace Def {
	type Texture =
		| string
		| {
				overlay_color?: string;
				path?: string;
				tint_color?: string;
				variations?: Array<{
					path: string;
					weight?: number;
				}>;
		  };
}
export type TerrainTexture = {
	num_mip_levels?: number;
	padding?: number;
	resource_pack_name?: string;
	texture_data?: {
		[prop: string]: {
			textures?: Def.Texture | Array<Def.Texture>;
		};
	};
	texture_name?: string;
};
