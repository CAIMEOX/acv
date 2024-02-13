import { Priority as Priority0 } from './types/priority';
import { Trigger as Trigger0 } from './../types/trigger';
import { Descriptor as Descriptor0 } from './../../../../general/item/descriptor';
import { Filters as Filters0 } from './../../filters/filters';
export type MoveToBlock = {
	priority?: Priority0;
	goal_radius?: number;
	on_stay_completed?: Array<Trigger0> | Trigger0;
	on_reach?: Array<Trigger0> | Trigger0;
	start_chance?: number;
	search_range?: number;
	search_height?: number;
	stay_duration?: number;
	target_selection_method?: 'random' | 'nearest';
	target_offset?: Array<number>;
	target_blocks?: Array<Descriptor0>;
	target_block_filters?: Filters0;
	tick_interval?: number;
};
