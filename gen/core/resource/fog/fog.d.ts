import { FormatVersion as FormatVersion0 } from './../../general/format_version';
import { Identifier as Identifier0 } from './../../general/fog/identifier';
export declare namespace Def {
	type ColorHexOrArray = Array<number> | string;
	type DefaultFogSettings = {
		fog_start: number;
		fog_end: number;
		fog_color: string;
		render_distance_type: 'fixed' | 'render';
		transition_fog?: {
			init_fog?: {
				fog_color?: string;
				fog_start?: number;
				fog_end?: number;
				render_distance_type?: 'fixed' | 'render';
			};
			min_percent?: number;
			mid_seconds?: number;
			mid_percent?: number;
			max_seconds?: number;
		};
	};
	type VolumeDensityObject = {
		max_density: number;
		max_density_height?: number;
		zero_density_height?: number;
		uniform?: boolean;
	};
	type VolumeMediaObject = {
		absorption?: Def.ColorHexOrArray;
		scattering?: Def.ColorHexOrArray;
	};
}
export type Fog = {
	format_version?: FormatVersion0;
	'minecraft:fog_settings'?: {
		description?: {
			identifier?: Identifier0;
		};
		distance?: {
			air?: Def.DefaultFogSettings;
			weather?: Def.DefaultFogSettings;
			water?: Def.DefaultFogSettings;
			lava?: Def.DefaultFogSettings;
			lava_resistance?: Def.DefaultFogSettings;
			powder_snow?: Def.DefaultFogSettings;
		};
		volumetric?: {
			density?: {
				air?: Def.VolumeDensityObject;
				water?: Def.VolumeDensityObject;
				lava?: Def.VolumeDensityObject;
				lava_resistance?: Def.VolumeDensityObject;
			};
			media_coefficients?: {
				air?: Def.VolumeMediaObject;
				water?: Def.VolumeMediaObject;
				cloud?: Def.VolumeMediaObject;
			};
		};
	};
};
