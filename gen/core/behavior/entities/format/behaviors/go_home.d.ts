import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
import { Trigger as Trigger0 } from './../types/trigger';
import { Event as Event0 } from './../types/event';
export type GoHome = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	goal_radius?: number;
	interval?: number;
	on_home?: Array<Trigger0>;
	on_failed?: Array<Event0>;
	calculate_new_path_radius?: number;
};
