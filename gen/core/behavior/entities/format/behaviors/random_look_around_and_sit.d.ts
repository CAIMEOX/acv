import { Priority as Priority0 } from './types/priority';
export type RandomLookAroundAndSit = {
	priority?: Priority0;
	continue_if_leashed?: boolean;
	continue_sitting_on_reload?: boolean;
	max_angle_of_view_horizontal?: number;
	max_look_count?: number;
	max_look_time?: number;
	min_angle_of_view_horizontal?: number;
	min_look_count?: number;
	min_look_time?: number;
	probability?: number;
	random_look_around_cooldown?: number;
};
