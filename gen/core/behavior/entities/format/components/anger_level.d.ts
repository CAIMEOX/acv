import { Filters as Filters0 } from './../../filters/filters';
export type AngerLevel = {
	anger_decrement_interval?: number;
	angry_boost?: number;
	angry_threshold?: number;
	default_annoyingness?: number;
	default_projectile_annoyingness?: number;
	max_anger?: number;
	nuisance_filter?: Filters0;
	on_increase_sounds?: Array<{
		condition: string;
		sound: string;
	}>;
	remove_targets_below_angry_threshold?: boolean;
};
