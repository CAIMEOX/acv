import { Identifier as Identifier0 } from './../../../general/item/identifier';
import { Number as Number0 } from './../../../molang/number';
export type Attachables = {
	format_version: string;
	'minecraft:attachable': {
		description: {
			animations?: {
				[prop: string]: string;
			};
			animation_controllers?: Array<unknown>;
			enable_attachables?: boolean;
			geometry?: {
				[prop: string]: string;
			};
			identifier: Identifier0;
			item?: {
				[prop: string]: string;
			};
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
			render_controllers?: Array<string>;
			scripts?: {
				animate?: Array<
					| string
					| {
							[prop: string]: string;
					  }
				>;
				initialize?: Array<Number0>;
				pre_animation?: Array<Number0>;
				parent_setup?: Number0;
				scale?: Number0;
			};
			sound_effects?: Array<string>;
			spawn_egg?: {
				base_colour?: string;
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
