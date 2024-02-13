import { EventObject as EventObject0 } from './../types/event_object';
import { Trigger as Trigger0 } from './../types/trigger';
export declare namespace Def {
	type NameAction = {
		name_filter?: string;
		on_named?: EventObject0;
	};
}
export type Nameable = {
	allow_name_tag_renaming?: boolean;
	always_show?: boolean;
	default_trigger?: Trigger0;
	name_actions?: Array<Def.NameAction> | Def.NameAction;
};
