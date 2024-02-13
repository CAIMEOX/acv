import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
export type ChargeAttack = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	max_distance?: number;
	min_distance?: number;
	success_rate?: number;
};
