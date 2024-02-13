import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
import { EntityTypes as EntityTypes0 } from './../types/entity_types';
export type SwimWithEntity = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	success_rate?: number;
	chance_to_stop?: number;
	state_check_interval?: number;
	catch_up_threshold?: number;
	match_direction_threshold?: number;
	catch_up_multiplier?: number;
	search_range?: number;
	stop_distance?: number;
	entity_types?: EntityTypes0;
};
