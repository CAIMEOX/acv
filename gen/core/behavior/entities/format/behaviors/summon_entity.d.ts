import { Priority as Priority0 } from './types/priority';
import { Filters as Filters0 } from './../../filters/filters';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
export type SummonEntity = {
	priority?: Priority0;
	summon_choices?: Array<{
		cast_duration?: number;
		cooldown_time?: number;
		do_casting?: boolean;
		filters?: Filters0;
		max_activation_range?: number;
		min_activation_range?: number;
		particle_color?: number | string;
		sequence?: Array<{
			delay?: number;
			delay_per_summon?: number;
			entity_lifespan?: number;
			base_delay?: number;
			entity_type?: string;
			num_entities_spawned?: number;
			shape?: 'line' | 'circle';
			size?: number;
			sound_event?: SoundEvent0;
			summon_cap?: number;
			summon_cap_radius?: number;
			target?: string;
		}>;
		start_sound_event?: SoundEvent0;
		weight?: number;
	}>;
};
