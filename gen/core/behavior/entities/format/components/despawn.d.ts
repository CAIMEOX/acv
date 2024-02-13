import { Filters as Filters0 } from './../../filters/filters';
export type Despawn = {
	despawn_from_chance?: boolean;
	despawn_from_distance?: {
		max_distance?: number;
		min_distance?: number;
	};
	despawn_from_inactivity?: boolean;
	despawn_from_simulation_edge?: boolean;
	filters?: Filters0;
	min_range_inactivity_timer?: number;
	min_range_random_chance?: number;
	remove_child_entities?: boolean;
};
