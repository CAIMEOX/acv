import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
export type Sleep = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	can_sleep_while_riding?: boolean;
	cooldown_time?: number;
	sleep_collider_height?: number;
	sleep_collider_width?: number;
	sleep_y_offset?: number;
	timeout_cooldown?: number;
};
