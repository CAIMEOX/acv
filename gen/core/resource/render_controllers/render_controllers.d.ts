import { FormatVersion as FormatVersion0 } from './../../general/format_version';
import { String as String0 } from './../../molang/string';
import { Number as Number0 } from './../../molang/number';
export declare namespace Def {
	type Color = number | string;
}
export type RenderControllers = {
	format_version?: FormatVersion0;
	render_controllers?: {
		[prop: string]: {
			arrays?: {
				geometries?: {
					[prop: string]: Array<string>;
				};
				materials?: {
					[prop: string]: Array<string>;
				};
				textures?: {
					[prop: string]: Array<string>;
				};
			};
			color?: {
				r?: Def.Color;
				g?: Def.Color;
				b?: Def.Color;
				a?: Def.Color;
			};
			filter_lighting?: boolean;
			geometry: String0;
			ignore_lighting?: boolean;
			is_hurt_color?: {
				r?: Def.Color;
				g?: Def.Color;
				b?: Def.Color;
				a?: Def.Color;
			};
			light_color_multiplier?: Number0;
			materials: Array<{
				[prop: string]: string;
			}>;
			on_fire_color?: {
				r?: Def.Color;
				g?: Def.Color;
				b?: Def.Color;
				a?: Def.Color;
			};
			overlay_color?: {
				r?: Def.Color;
				g?: Def.Color;
				b?: Def.Color;
				a?: Def.Color;
			};
			part_visibility?: Array<{
				[prop: string]: string | boolean | number;
			}>;
			rebuild_animation_matrices?: boolean;
			textures?: Array<String0>;
			uv_anim?: {
				offset: Array<Number0>;
				scale: Array<Number0>;
			};
		};
	};
};
