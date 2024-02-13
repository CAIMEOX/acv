import { Filters as Filters0 } from './../../filters/filters';
import { DamageSource as DamageSource0 } from './../../../../general/entity/damage_source';
export type HurtOnCondition = {
	damage_conditions?: Array<{
		filters?: Filters0;
		cause?: DamageSource0;
		damage_per_tick?: number;
	}>;
};
