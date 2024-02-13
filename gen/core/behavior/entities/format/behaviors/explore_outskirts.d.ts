import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
import { Number3 as Number30 } from './../../../../general/vectors/number3';
export type ExploreOutskirts = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	dist_from_boundary?: Number30;
	explore_dist?: number;
	max_travel_time?: number;
	max_wait_time?: number;
	min_dist_from_target?: number;
	min_perimeter?: number;
	min_wait_time?: number;
	next_xz?: number;
	next_y?: number;
	timer_ratio?: number;
};
