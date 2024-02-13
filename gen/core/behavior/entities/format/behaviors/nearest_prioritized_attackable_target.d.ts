import { Priority as Priority0 } from './types/priority';
import { EntityTypes as EntityTypes0 } from './../types/entity_types';
export type NearestPrioritizedAttackableTarget = {
	priority?: Priority0;
	entity_types?: EntityTypes0;
	attack_interval?: number;
	cooldown?: number;
	must_reach?: boolean;
	must_see?: boolean;
	must_see_forget_duration?: number;
	persist_time?: number;
	reselect_targets?: boolean;
	reevaluate_description?: boolean;
	scan_interval?: number;
	set_persistent?: boolean;
	target_search_height?: number;
	within_radius?: number;
};
