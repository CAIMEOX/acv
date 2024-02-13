import { EventObject as EventObject0 } from './../types/event_object';
import { Identifier as Identifier0 } from './../../../../general/item/identifier';
export type Tameable = {
	probability?: number;
	tame_event?: EventObject0;
	tame_items?: Array<Identifier0> | Identifier0;
};
