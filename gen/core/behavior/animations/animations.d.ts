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
export type Animations = {
	format_version: FormatVersion0;
	animations: {
		[prop: string]: {
			animation_length?: number;
			loop?: boolean;
			timeline?: {
				[prop: string]: Def.Commands | Array<Def.Commands>;
			};
		};
	};
};
