import { AddMobEffect as AddMobEffect0 } from './events/add_mob_effect';
import { Damage as Damage0 } from './events/damage';
import { DecrementStack as DecrementStack0 } from './events/decrement_stack';
import { RemoveMobEffect as RemoveMobEffect0 } from './events/remove_mob_effect';
import { Shoot as Shoot0 } from './events/shoot';
import { Swing as Swing0 } from './events/swing';
import { Teleport as Teleport0 } from './events/teleport';
import { TransformItem as TransformItem0 } from './events/transform_item';
export declare namespace Def {
	type EventBase = Def.EventFunctions;
	type EventFunctions = {
		add_mob_effect?: AddMobEffect0;
		damage?: Damage0;
		decrement_stack?: DecrementStack0;
		remove_mob_effect?: RemoveMobEffect0;
		shoot?: Shoot0;
		swing?: Swing0;
		teleport?: Teleport0;
		transform_item?: TransformItem0;
	};
}
export type Events = {
	on_consume?: Def.EventBase;
};
