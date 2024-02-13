import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
import { Filters as Filters0 } from './../../filters/filters';
export type Nap = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	cooldown_max?: number;
	cooldown_min?: number;
	mob_detect_dist?: number;
	mob_detect_height?: number;
	can_nap_filters?: Filters0;
	wake_mob_exceptions?: Filters0;
};
