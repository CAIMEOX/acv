import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
import { Trigger as Trigger0 } from './../types/trigger';
export type DelayedAttack = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	attack_duration?: number;
	attack_once?: boolean;
	attack_types?: string;
	can_spread_on_fire?: boolean;
	cooldown_time?: number;
	hit_delay_pct?: number;
	inner_boundary_time_increase?: number;
	max_dist?: number;
	max_path_time?: number;
	melee_fov?: number;
	min_path_time?: number;
	on_attack?: Trigger0;
	outer_boundary_time_increase?: number;
	path_fail_time_increase?: number;
	path_inner_boundary?: number;
	path_outer_boundary?: number;
	random_stop_interval?: number;
	reach_multiplier?: number;
	require_complete_path?: boolean;
	set_persistent?: boolean;
	target_dist?: number;
	track_target?: boolean;
	x_max_rotation?: number;
	y_max_head_rotation?: number;
};
