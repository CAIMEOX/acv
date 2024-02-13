import { Filters as Filters0 } from './../../filters/filters';
import { Priority as Priority0 } from './types/priority';
import { EntityTypes as EntityTypes0 } from './../types/entity_types';
export declare namespace Def {
	type EntityType = {
		filters?: Filters0;
		max_dist?: number;
		must_see?: boolean;
		must_see_forget_duration?: boolean;
	};
}
export type NearestAttackableTarget = {
	priority?: Priority0;
	entity_types?: EntityTypes0;
	attack_interval?: number;
	attack_interval_min?: number;
	attack_owner?: boolean;
	must_reach?: boolean;
	must_see?: boolean;
	must_see_forget_duration?: number;
	persist_time?: number;
	reselect_targets?: boolean;
	scan_interval?: number;
	set_persistent?: boolean;
	target_invisible_multiplier?: number;
	target_search_height?: number;
	target_sneak_visibility_multiplier?: number;
	within_radius?: number;
};
