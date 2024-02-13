import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
export type MoveToPoi = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	poi_type?: 'bed' | 'jobsite' | 'meeting_area';
};
