import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
import { Descriptor as Descriptor0 } from './../../../../general/item/descriptor';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
export type Tempt = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	can_get_scared?: boolean;
	can_tempt_while_ridden?: boolean;
	can_tempt_vertically?: boolean;
	items?: Array<Descriptor0>;
	sound_interval?: number | Array<number>;
	tempt_sound?: SoundEvent0;
	within_radius?: number;
};
