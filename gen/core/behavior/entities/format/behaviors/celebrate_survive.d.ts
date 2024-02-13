import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
import { RangeNumberType as RangeNumberType0 } from './../types/range_number_type';
import { Event as Event0 } from './../types/event';
export type CelebrateSurvive = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	fireworks_interval?: RangeNumberType0;
	duration?: number;
	on_celebration_end_event?: Event0;
};
