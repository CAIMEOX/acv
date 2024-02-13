import { String as String0 } from './../../molang/string';
import { Number as Number0 } from './../../molang/number';
import { FormatVersion as FormatVersion0 } from './../../general/format_version';
export declare namespace Def {
	type ParticleEffect = {
		effect: string;
		locator?: string;
		pre_effect_script?: String0;
		bind_to_actor?: boolean;
	};
	type PositionV3 = Array<Number0>;
	type RotationV3 = Array<Number0>;
	type ScaleV3 = Array<Number0>;
	type SoundEffect = {
		effect?: string;
	};
}
export type ActorAnimation = {
	format_version: FormatVersion0;
	animations: {
		[prop: string]: {
			anim_time_update?: Number0;
			animation_length?: number;
			blend_weight?: Number0;
			bones?: {
				[prop: string]: {
					position?:
						| Def.PositionV3
						| {
								[prop: string]:
									| Number0
									| Def.PositionV3
									| {
											lerp_mode?: 'linear' | 'catmullrom';
											pre?: Def.PositionV3;
											post?: Def.PositionV3;
									  };
						  };
					rotation?:
						| Def.RotationV3
						| {
								[prop: string]:
									| Number0
									| Def.RotationV3
									| {
											lerp_mode?: 'linear' | 'catmullrom';
											pre?: Def.RotationV3;
											post?: Def.RotationV3;
									  };
						  };
					relative_to?: {
						rotation?: string;
					};
					scale?:
						| Number0
						| Def.ScaleV3
						| {
								[prop: string]:
									| Number0
									| Def.ScaleV3
									| {
											lerp_mode?: 'linear' | 'catmullrom';
											pre?: Def.ScaleV3;
											post?: Def.ScaleV3;
									  };
						  };
				};
			};
			loop?: boolean | 'hold_on_last_frame';
			loop_delay?: Number0;
			override_previous_animation?: boolean;
			particle_effects?: {
				[prop: string]: Def.ParticleEffect | Array<Def.ParticleEffect>;
			};
			start_delay?: Number0;
			sound_effects?: {
				[prop: string]: Def.SoundEffect | Array<Def.SoundEffect>;
			};
			timeline?: {
				[prop: string]: string | Array<string>;
			};
		};
	};
};
