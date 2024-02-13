import { Priority as Priority0 } from './types/priority';
import { Filters as Filters0 } from './../../filters/filters';
export type StalkAndPounceOnTarget = {
	priority?: Priority0;
	interest_time?: number;
	leap_distance?: number;
	leap_height?: number;
	max_stalk_dist?: number;
	pounce_max_dist?: number;
	set_persistent?: boolean;
	stalk_speed?: number;
	strike_dist?: number;
	stuck_time?: number;
	leap_dist?: number;
	stuck_blocks?: Filters0;
};
