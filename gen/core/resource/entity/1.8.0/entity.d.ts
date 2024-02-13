import { Identifier as Identifier0 } from './../../../general/entity/identifier';
import { String as String0 } from './../../../molang/string';
import { Number as Number0 } from './../../../molang/number';
export type Entity = {
	format_version: '1.8.0';
	'minecraft:client_entity': {
		description: {
			animations?: {
				[prop: string]: string;
			};
			animation_controllers?: Array<{
				[prop: string]: string;
			}>;
			enable_attachables?: boolean;
			geometry?: {
				[prop: string]: string;
			};
			hide_armor?: boolean;
			held_item_ignores_lighting?: boolean;
			identifier: Identifier0;
			materials?: {
				[prop: string]: string;
			};
			min_engine_version?: string;
			particle_effects?: {
				[prop: string]: string;
			};
			particle_emitters?: {
				[prop: string]: string;
			};
			render_controllers?: Array<
				| string
				| {
						[prop: string]: string;
				  }
			>;
			scripts?: {
				pre_animation?: Array<String0>;
				parent_setup?: Number0;
				scale?: Number0;
				scalex?: Number0;
				scaley?: Number0;
				scalez?: Number0;
			};
			sound_effects?: {
				[prop: string]: string;
			};
			spawn_egg?: {
				base_color?: string;
				overlay_color?: string;
				texture?: string;
				texture_index?: number;
			};
			textures?: {
				[prop: string]: string;
			};
		};
	};
};
