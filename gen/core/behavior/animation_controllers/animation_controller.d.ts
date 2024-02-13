import { String as String0 } from './../../molang/string';
import { FormatVersion as FormatVersion0 } from './../../general/format_version';
export declare namespace Def {
	type Animationspec =
		| string
		| {
				[prop: string]: String0;
		  };
	type ParticleEffectSpec = {
		bind_to_actor?: boolean;
		effect: string;
		locator?: string;
		pre_effect_script?: string;
	};
	type Commands = string & string;
}
export type AnimationController = {
	format_version: FormatVersion0;
	animation_controllers: {
		[prop: string]: {
			states: {
				[prop: string]: {
					animations?: Array<Def.Animationspec>;
					on_entry?: Array<Def.Commands>;
					on_exit?: Array<Def.Commands>;
					transitions?: Array<{
						[prop: string]: String0;
					}>;
				};
			};
			initial_state?: string;
		};
	};
};
