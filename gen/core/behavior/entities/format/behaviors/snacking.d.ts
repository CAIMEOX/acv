import { Priority as Priority0 } from './types/priority';
import { Descriptor as Descriptor0 } from './../../../../general/item/descriptor';
export type Snacking = {
	priority?: Priority0;
	items?: Array<Descriptor0> | Descriptor0;
	snacking_cooldown?: number;
	snacking_cooldown_min?: number;
	snacking_stop_chance?: number;
};
