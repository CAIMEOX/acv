import { EventObject as EventObject0 } from './../types/event_object';
export type DryingOutTimer = {
	dried_out_event?: EventObject0;
	recover_after_dried_out_event?: EventObject0;
	stopped_drying_out_event?: EventObject0;
	total_time?: number;
	water_bottle_refill_time?: number;
};
