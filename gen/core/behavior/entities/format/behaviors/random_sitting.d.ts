import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
export type RandomSitting = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	cooldown?: number;
	cooldown_time?: number;
	min_sit_time?: number;
	start_chance?: number;
	stop_chance?: number;
};
