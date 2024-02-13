import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
export type FertilizeFarmBlock = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	goal_radius?: number;
	max_fertilizer_usage?: number;
	search_cooldown_max_seconds?: number;
	search_count?: number;
	search_height?: number;
	search_range?: number;
};
