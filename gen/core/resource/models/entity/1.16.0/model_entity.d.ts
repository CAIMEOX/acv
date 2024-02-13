import { FormatVersion as FormatVersion0 } from './../../../../general/format_version';
import { String as String0 } from './../../../../molang/string';
export declare namespace Def {
	type Uv = Array<number>;
	type DirectionUv = {
		uv?: Def.Uv;
		uv_size?: Def.Uv;
		material_instance?: string;
	};
}
export type ModelEntity = {
	debug?: boolean;
	format_version: FormatVersion0;
	'minecraft:geometry': Array<{
		description: {
			identifier: string;
			texture_width?: number;
			texture_height?: number;
			visible_bounds_offset?: Array<number>;
			visible_bounds_width?: number;
			visible_bounds_height?: number;
		};
		bones?: Array<{
			binding?: String0;
			cubes?: Array<{
				inflate?: number;
				mirror?: boolean;
				origin?: Array<number>;
				pivot?: Array<number>;
				reset?: boolean;
				rotation?: Array<number>;
				size?: Array<number>;
				uv?:
					| {
							north?: Def.DirectionUv;
							south?: Def.DirectionUv;
							east?: Def.DirectionUv;
							west?: Def.DirectionUv;
							up?: Def.DirectionUv;
							down?: Def.DirectionUv;
					  }
					| Array<number>;
			}>;
			debug?: boolean;
			inflate?: number;
			locators?: {
				[prop: string]:
					| {
							offset: Array<number>;
							rotation: Array<number>;
							ignore_inherited_scale?: boolean;
					  }
					| Array<number>;
			};
			mirror?: boolean;
			name: string;
			parent?: string;
			pivot?: Array<number>;
			poly_mesh?: {
				normalized_uvs?: boolean;
				normals?: Array<Array<number>>;
				polys: 'tri_list' | 'quad_list' | Array<Array<Array<number>>>;
				positions?: Array<Array<number>>;
				uvs?: Array<Array<number>>;
			};
			render_group_id?: number;
			rotation?: Array<number>;
			texture_meshes?: Array<{
				local_pivot?: Array<number>;
				position?: Array<number>;
				rotation?: Array<number>;
				scale?: Array<number>;
				texture: string;
			}>;
		}>;
		cape?: string;
	}>;
};
