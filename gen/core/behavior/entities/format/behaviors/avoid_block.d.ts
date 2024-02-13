import { Priority as Priority0 } from './types/priority';
import { Descriptor as Descriptor0 } from './../../../../general/item/descriptor';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
import { Event as Event0 } from './../types/event';
export type AvoidBlock = {
	priority?: Priority0;
	tick_interval?: number;
	search_range?: number;
	search_height?: number;
	sprint_speed_modifier?: number;
	target_selection_method?: 'random' | 'nearest';
	target_blocks?: Array<Descriptor0>;
	avoid_block_sound?: SoundEvent0;
	walk_speed_modifier?: number;
	on_escape?: Array<Event0>;
	sound_interval?:
		| Array<number>
		| number
		| {
				range_min?: number;
				range_max?: number;
		  };
};
