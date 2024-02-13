import { Priority as Priority0 } from './types/priority';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
import { Event as Event0 } from './../types/event';
export type AdmireItem = {
	priority?: Priority0;
	admire_item_sound?: SoundEvent0;
	on_admire_item_start?: Event0;
	on_admire_item_stop?: Event0;
	sound_interval?:
		| Array<number>
		| number
		| {
				range_min?: number;
				range_max?: number;
		  };
};
