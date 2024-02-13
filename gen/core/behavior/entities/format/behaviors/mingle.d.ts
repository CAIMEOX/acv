import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
export type Mingle = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	cooldown_time?: number;
	duration?: number;
	mingle_distance?: number;
	mingle_partner_type?: Array<string> | string;
};
