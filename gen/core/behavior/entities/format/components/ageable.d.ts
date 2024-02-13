import { Descriptor as Descriptor0 } from './../../../../general/item/descriptor';
import { Identifier as Identifier0 } from './../../../../general/item/identifier';
import { EventObject as EventObject0 } from './../types/event_object';
import { Filters as Filters0 } from './../../filters/filters';
export type Ageable = {
	drop_items?: Array<Descriptor0> | Descriptor0;
	duration?: number;
	feed_items?:
		| Array<
				| Identifier0
				| {
						growth?: number;
						item?: Descriptor0;
				  }
		  >
		| Identifier0;
	grow_up?: EventObject0;
	transform_to_item?: Descriptor0;
	interact_filters?: Filters0;
};
