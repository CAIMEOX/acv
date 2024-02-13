import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
import { Number3 as Number30 } from './../../../../general/vectors/number3';
import { Filters as Filters0 } from './../../filters/filters';
export type Play = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	chance_to_start?: number;
	follow_distance?: number;
	friend_search_area?: Number30;
	friend_types?: Array<{
		filters?: Filters0;
	}>;
	max_play_duration_seconds?: number;
	random_pos_search_height?: number;
	random_pos_search_range?: number;
};
