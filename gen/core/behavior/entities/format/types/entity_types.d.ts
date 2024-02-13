import { Filters as Filters0 } from './../../filters/filters';
export declare namespace Def {
	type EntityDefinition = {
		filters?: Filters0;
		cooldown?: number;
		max_dist?: number;
		max_height?: number;
		max_flee?: number;
		priority?: number;
		check_if_outnumbered?: number;
		must_see?: boolean;
		must_see_forget_duration?: number;
		reevaluate_description?: boolean;
		sprint_speed_multiplier?: number;
		walk_speed_multiplier?: number;
	};
}
export type EntityTypes = Array<Def.EntityDefinition> | Def.EntityDefinition;
