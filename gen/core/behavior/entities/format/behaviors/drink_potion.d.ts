import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
import { Filters as Filters0 } from './../../filters/filters';
export type DrinkPotion = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	speed_modifier?: unknown;
	potions?: Array<{
		id: number;
		chance: number;
		filters: Filters0;
	}>;
};
