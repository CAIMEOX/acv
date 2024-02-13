import { EventObject as EventObject0 } from './../types/event_object';
export type Timer = {
	looping?: boolean;
	randomInterval?: boolean;
	time?: Array<number> | number;
	time_down_event?: EventObject0;
	random_time_choices?: Array<{
		weight?: number;
		value?: number;
	}>;
};
