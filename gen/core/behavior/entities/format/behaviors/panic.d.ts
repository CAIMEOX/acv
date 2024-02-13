import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
import { DamageSource as DamageSource0 } from './../../../../general/entity/damage_source';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
export type Panic = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	damage_sources?: Array<DamageSource0>;
	force?: boolean;
	ignore_mob_damage?: boolean;
	prefer_water?: boolean;
	panic_sound?: SoundEvent0;
	sound_interval?: {
		range_min?: number;
		range_max?: number;
	};
};
