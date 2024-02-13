import { Priority as Priority0 } from './types/priority';
import { Filters as Filters0 } from './../../filters/filters';
import { DamageSource as DamageSource0 } from './../../../../general/entity/damage_source';
export type PlayDead = {
	priority?: Priority0;
	apply_regeneration?: boolean;
	duration?: number;
	filters?: Filters0;
	force_below_health?: number;
	random_start_chance?: number;
	random_damage_range?: Array<number>;
	damage_sources?: DamageSource0 | Array<DamageSource0>;
};
