import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
export type MoveToLand = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	goal_radius?: number;
	search_count?: number;
	search_height?: number;
	search_range?: number;
};
