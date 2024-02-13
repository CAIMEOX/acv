import { Operator as Operator0 } from './types/operator';
import { Subject as Subject0 } from './types/subject';
import { DamageSource as DamageSource0 } from './../../../../general/entity/damage_source';
export type HasDamage = {
	test?: string;
	operator?: Operator0;
	subject?: Subject0;
	value: DamageSource0;
};
