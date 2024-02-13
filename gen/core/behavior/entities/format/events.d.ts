import { Filters as Filters0 } from './../filters/filters';
import { Trigger as Trigger0 } from './types/trigger';
export declare namespace Def {
	type Addremove = {
		component_groups?: Array<string>;
	};
	type EventBase = {
		filters?: Filters0;
		trigger?: Trigger0;
		add?: Def.Addremove;
		remove?: Def.Addremove;
		randomize?: Array<{
			add?: Def.Addremove;
			remove?: Def.Addremove;
			trigger?: Trigger0;
			weight?: number;
		}>;
		sequence?: Array<{
			add?: Def.Addremove;
			remove?: Def.Addremove;
			trigger?: Trigger0;
			filters?: Filters0;
		}>;
		set_property?: {
			[prop: string]: 'string' | 'number' | 'integer' | 'boolean';
		};
		queue_command?: {
			command?: string | Array<string>;
		};
	};
}
export type Events = {
	'minecraft:entity_transformed'?: Def.EventBase;
	'minecraft:entity_born'?: Def.EventBase;
	'minecraft:entity_spawned'?: Def.EventBase;
	'minecraft:on_prime'?: Def.EventBase;
};
