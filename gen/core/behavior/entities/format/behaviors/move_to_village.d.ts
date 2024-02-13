import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
export type MoveToVillage = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	cooldown_time?: number;
	goal_radius?: number;
	search_range?: number;
};
