import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
import { Reference as Reference0 } from './../../../../general/block/reference';
export type RaidGarden = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	blocks?: Array<Reference0>;
	eat_delay?: number;
	full_delay?: number;
	initial_eat_delay?: number;
	goal_radius?: number;
	max_to_eat?: number;
	search_range?: number;
	search_height?: number;
};
