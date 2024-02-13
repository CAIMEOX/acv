import { Descriptor as Descriptor0 } from './../../../../general/item/descriptor';
import { EventObject as EventObject0 } from './../types/event_object';
export type Equippable = {
	slots?: Array<{
		slot?: number;
		accepted_items?: Array<Descriptor0>;
		item?: Descriptor0;
		interact_text?: string;
		on_equip?: EventObject0;
		on_unequip?: EventObject0;
	}>;
};
