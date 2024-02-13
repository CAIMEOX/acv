import { DamageSource as DamageSource0 } from './../../../../general/entity/damage_source';
import { Filters as Filters0 } from './../../filters/filters';
export type AreaAttack = {
	cause?: DamageSource0;
	damage_cooldown?: number;
	damage_per_tick?: number;
	damage_range?: number;
	entity_filter?: Filters0;
	play_attack_sound?: boolean;
};
