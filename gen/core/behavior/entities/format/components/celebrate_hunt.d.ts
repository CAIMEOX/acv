import { Filters as Filters0 } from './../../filters/filters';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
export type CelebrateHunt = {
	broadcast?: boolean;
	celebration_targets?: Filters0;
	celebrate_sound?: SoundEvent0;
	duration?: number;
	radius?: number;
	sound_interval?:
		| Array<number>
		| number
		| {
				range_min?: number;
				range_max?: number;
		  };
};
