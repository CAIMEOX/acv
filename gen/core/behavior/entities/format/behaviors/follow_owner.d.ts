import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
export type FollowOwner = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	can_teleport?: boolean;
	ignore_vibration?: boolean;
	max_distance?: number;
	start_distance?: number;
	stop_distance?: number;
};
