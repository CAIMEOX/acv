import { Priority as Priority0 } from './types/priority';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
import { Trigger as Trigger0 } from './../types/trigger';
import { RangeNumberType as RangeNumberType0 } from './../types/range_number_type';
export type Celebrate = {
	priority?: Priority0;
	celebration_sound?: SoundEvent0;
	duration?: number;
	jump_interval?:
		| Array<number>
		| number
		| {
				range_min?: number;
				range_max?: number;
		  };
	on_celebration_end_event?: Trigger0;
	sound_interval?: RangeNumberType0;
};
