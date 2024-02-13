import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
import { Filters as Filters0 } from './../../filters/filters';
import { Number3 as Number30 } from './../../../../general/vectors/number3';
export type TakeFlower = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	filters?: Filters0;
	max_head_rotation_y?: number;
	max_rotation_x?: number;
	max_wait_time?: number;
	min_distance_to_target?: number;
	min_wait_time?: number;
	search_area?: Number30;
};
