import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
export type HarvestFarmBlock = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	max_seconds_before_search?: number;
	search_cooldown_max_seconds?: number;
	search_count?: number;
	search_height?: number;
	search_range?: number;
	seconds_until_new_task?: number;
};
