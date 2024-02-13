import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
export type RandomSwim = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	avoid_surface?: boolean;
	interval?: number;
	xz_dist?: number;
	y_dist?: number;
};
