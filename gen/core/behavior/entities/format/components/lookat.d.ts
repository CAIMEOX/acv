import { Filters as Filters0 } from './../../filters/filters';
import { RangeNumberType as RangeNumberType0 } from './../types/range_number_type';
import { EventObject as EventObject0 } from './../types/event_object';
export type Lookat = {
	allow_invulnerable?: boolean;
	filters?: Filters0;
	look_cooldown?: RangeNumberType0;
	look_event?: EventObject0;
	search_radius?: number;
	set_target?: boolean;
};
