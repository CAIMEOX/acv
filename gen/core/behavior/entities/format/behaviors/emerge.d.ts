import { Priority as Priority0 } from './types/priority';
import { Trigger as Trigger0 } from './../types/trigger';
export type Emerge = {
	priority?: Priority0;
	cooldown_time?: number;
	duration?: number;
	on_done?: Trigger0;
};
