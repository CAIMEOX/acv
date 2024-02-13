import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
export type MoveTowardsRestriction = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	control_flags?: Array<'move' | 'look'>;
};
