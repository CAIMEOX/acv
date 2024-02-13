import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
import { Priority as Priority0 } from './types/priority';
import { Filters as Filters0 } from './../../filters/filters';
export declare namespace Def {
	type Sequence = Array<{
		base_delay?: number;
		event?: string;
		sound_event?: SoundEvent0;
	}>;
}
export type SendEvent = {
	priority?: Priority0;
	cast_duration?: number;
	look_at_target?: boolean;
	event_choices?: Array<{
		min_activation_range?: number;
		max_activation_range?: number;
		cooldown_time?: number;
		cast_duration?: number;
		filters?: Filters0;
		particle_color?: string;
		weight?: number;
		start_sound_event?: SoundEvent0;
		sequence?: Def.Sequence;
	}>;
	sequence?: Def.Sequence;
};
