import { Priority as Priority0 } from './types/priority';
import { RangeNumberType as RangeNumberType0 } from './../types/range_number_type';
import { Trigger as Trigger0 } from './../types/trigger';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
export type RamAttack = {
	priority?: Priority0;
	baby_knockback_modifier?: number;
	cooldown_range?: RangeNumberType0;
	knockback_force?: number;
	knockback_height?: number;
	min_ram_distance?: number;
	on_start?: Trigger0;
	pre_ram_sound?: SoundEvent0;
	ram_distance?: number;
	ram_impact_sound?: SoundEvent0;
	ram_speed?: number;
	run_speed?: number;
	trigger?: Trigger0;
};
