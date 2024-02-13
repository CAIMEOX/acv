import { Number3 as Number30 } from './../../../../general/vectors/number3';
import { Number as Number0 } from './../../../../molang/number';
export declare namespace Def {
	type SeatsSpec = {
		lock_rider_rotation?: number;
		max_rider_count?: number;
		min_rider_count?: number;
		position?: Number30;
		rotate_rider_by?: Number0;
	};
}
export type Rideable = {
	controlling_seat?: number;
	crouching_skip_interact?: boolean;
	family_types?: Array<string>;
	interact_text?: string;
	passenger_max_width?: number;
	pull_in_entities?: boolean;
	rider_can_interact?: boolean;
	seat_count?: number;
	seats?: Def.SeatsSpec | Array<Def.SeatsSpec>;
};
