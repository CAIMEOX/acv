import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
import { RangeNumberType as RangeNumberType0 } from './../types/range_number_type';
export type CircleAroundAnchor = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	radius_range?: RangeNumberType0;
	radius_change_chance?: number;
	height_above_target_range?: RangeNumberType0;
	height_offset_range?: RangeNumberType0;
	height_change_chance?: number;
	goal_radius?: number;
	radius_change?: number;
	radius_adjustment_chance?: number;
	height_adjustment_chance?: number;
	angle_change?: number;
};
