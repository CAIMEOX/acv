import { Filters as Filters0 } from './../../filters/filters';
import { Event as Event0 } from './../types/event';
export type Scheduler = {
	min_delay_secs?: number;
	max_delay_secs?: number;
	scheduled_events?: Array<{
		filters?: Filters0;
		event?: Event0;
	}>;
};
