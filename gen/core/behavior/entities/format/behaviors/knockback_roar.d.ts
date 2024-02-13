import { Priority as Priority0 } from './types/priority';
import { Filters as Filters0 } from './../../filters/filters';
import { Event as Event0 } from './../types/event';
export type KnockbackRoar = {
	priority?: Priority0;
	attack_time?: number;
	cooldown_time?: number;
	damage_filters?: Filters0;
	duration?: number;
	knockback_damage?: number;
	knockback_strength?: number;
	knockback_filters?: Filters0;
	knockback_horizontal_strength?: number;
	knockback_range?: number;
	knockback_vertical_strength?: number;
	knockback_height_cap?: number;
	track_target?: boolean;
	on_roar_end?: Event0;
};
