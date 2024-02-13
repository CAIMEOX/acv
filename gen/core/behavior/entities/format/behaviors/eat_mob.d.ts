import { Priority as Priority0 } from './types/priority';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
export type EatMob = {
	priority?: Priority0;
	eat_animation_time?: number;
	eat_mob_sound?: SoundEvent0;
	loot_table?: string;
	pull_in_force?: number;
	reach_mob_distance?: number;
	run_speed?: number;
};
