import { Priority as Priority0 } from './types/priority';
import { Event as Event0 } from './../types/event';
export type HoldGround = {
	priority?: Priority0;
	broadcast?: boolean;
	broadcast_range?: number;
	min_radius?: number;
	within_radius_event?: Event0;
};
