import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
export type RandomFly = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	avoid_damage_blocks?: boolean;
	can_land_on_trees?: boolean;
	xz_dist?: number;
	y_dist?: number;
	y_offset?: number;
};
