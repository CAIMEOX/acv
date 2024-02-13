import { Filters as Filters0 } from './../../filters/filters';
import { EventObject as EventObject0 } from './../types/event_object';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
export type Angry = {
	broadcast_anger?: boolean;
	broadcast_filters?: Filters0;
	filters?: Filters0;
	broadcast_range?: number;
	broadcast_targets?: Array<string>;
	calm_event?: EventObject0;
	angry_sound?: SoundEvent0;
	broadcast_anger_on_attack?: boolean;
	broadcast_anger_on_being_attacked?: boolean;
	duration?: number;
	duration_delta?: number;
	sound_interval?:
		| Array<number>
		| {
				range_min?: number;
				range_max?: number;
		  };
};
