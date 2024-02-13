import { Priority as Priority0 } from './types/priority';
import { SpeedMultiplier as SpeedMultiplier0 } from './types/speed_multiplier';
import { Descriptor as Descriptor0 } from './../../../../general/item/descriptor';
export type PickupItems = {
	priority?: Priority0;
	speed_multiplier?: SpeedMultiplier0;
	can_pickup_any_item?: boolean;
	can_pickup_to_hand_or_equipment?: boolean;
	cooldown_after_being_attacked?: number;
	excluded_items?: Array<Descriptor0>;
	goal_radius?: number;
	max_dist?: number;
	search_height?: number;
	pickup_based_on_chance?: boolean;
	pickup_same_items_as_in_hand?: boolean;
	track_target?: boolean;
};
