import { DamageSource as DamageSource0 } from './../../../../general/entity/damage_source';
import { Trigger as Trigger0 } from './../types/trigger';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
export declare namespace Def {
	type Triggers = {
		cause?: DamageSource0;
		damage_modifier?: number;
		damage_multiplier?: number;
		deals_damage?: boolean;
		on_damage?: Trigger0;
		on_damage_sound_event?: SoundEvent0;
	};
}
export type DamageSensor = {
	triggers?: Array<Def.Triggers> | Def.Triggers;
};
