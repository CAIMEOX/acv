import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
export type RangedAttack = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	attack_interval?: number;
	attack_interval_max?: number;
	attack_interval_min?: number;
	attack_radius?: number;
	attack_radius_min?: number;
	burst_interval?: number;
	burst_shots?: number;
	charge_charged_trigger?: number;
	charge_shoot_trigger?: number;
	ranged_fov?: number;
	set_persistent?: boolean;
	swing?: boolean;
	target_in_sight_time?: number;
	x_max_rotation?: number;
	y_max_head_rotation?: number;
};