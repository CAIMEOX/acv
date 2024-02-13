import { Descriptor as Descriptor0 } from './../../../../general/item/descriptor';
import { EventObject as EventObject0 } from './../types/event_object';
export type Giveable = {
	triggers?: {
		cooldown?: number;
		items?: Array<Descriptor0>;
		on_give?: EventObject0;
	};
};
