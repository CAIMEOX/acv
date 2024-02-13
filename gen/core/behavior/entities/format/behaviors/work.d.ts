import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
import { Trigger as Trigger0 } from './../types/trigger';
export type Work = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	active_time?: number;
	can_work_in_rain?: boolean;
	goal_cooldown?: number;
	on_arrival?: Trigger0;
	sound_delay_max?: number;
	sound_delay_min?: number;
	work_in_rain_tolerance?: number;
};
