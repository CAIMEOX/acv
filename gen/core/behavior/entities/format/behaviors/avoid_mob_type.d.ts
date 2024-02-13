import { Priority as Priority0 } from './types/priority';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
import { EntityTypes as EntityTypes0 } from './../types/entity_types';
import { Event as Event0 } from './../types/event';
export type AvoidMobType = {
	priority?: Priority0;
	avoid_mob_sound?: SoundEvent0;
	avoid_target_xz?: number;
	avoid_target_y?: number;
	ignore_visibilty?: boolean;
	max_dist?: number;
	max_flee?: number;
	probability_per_strength?: number;
	remove_target?: boolean;
	sprint_distance?: number;
	sprint_speed_multiplier?: number;
	walk_speed_multiplier?: number;
	ignore_visibility?: boolean;
	entity_types?: EntityTypes0;
	on_escape_event?: Event0;
	sound_interval?:
		| Array<number>
		| number
		| {
				range_min?: number;
				range_max?: number;
		  };
};
