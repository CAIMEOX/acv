import { String as String0 } from './../../molang/string';
import { FormatVersion as FormatVersion0 } from './../../general/format_version';
import { Number as Number0 } from './../../molang/number';
export declare namespace Def {
	type Animationspec =
		| string
		| {
				[prop: string]: String0 | number;
		  };
	type ParticleEffectSpec = {
		bind_to_actor?: boolean;
		effect: string;
		locator?: string;
		pre_effect_script?: string;
	};
	type Commands = string;
}
export type AnimationController = {
	format_version: FormatVersion0;
	animation_controllers: {
		[prop: string]: {
			states: {
				[prop: string]: {
					animations?: Array<Def.Animationspec>;
					blend_transition?:
						| number
						| {
								[prop: string]: number;
						  };
					blend_via_shortest_path?: boolean;
					particle_effects?: Array<Def.ParticleEffectSpec>;
					sound_effects?: Array<{
						effect: string;
					}>;
					transitions?: Array<Def.Animationspec>;
					variables?: {
						[prop: string]: {
							input: Number0;
							remap_curve?: {
								[prop: string]: number;
							};
						};
					};
					on_entry?: Array<string>;
					on_exit?: Array<string>;
				};
			};
			initial_state?: string;
		};
	};
};
