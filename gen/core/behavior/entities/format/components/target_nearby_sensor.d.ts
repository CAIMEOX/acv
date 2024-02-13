import { EventObject as EventObject0 } from './../types/event_object';
export type TargetNearbySensor = {
	must_see?: boolean;
	inside_range?: number;
	on_inside_range?: EventObject0;
	on_outside_range?: EventObject0;
	on_vision_lost_inside_range?: EventObject0;
	outside_range?: number;
};
