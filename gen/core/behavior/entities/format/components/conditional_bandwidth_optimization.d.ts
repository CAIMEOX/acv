import { Filters as Filters0 } from './../../filters/filters';
export type ConditionalBandwidthOptimization = {
	conditional_values?: Array<{
		max_dropped_ticks?: number;
		max_optimized_distance?: number;
		use_motion_prediction_hints?: boolean;
		conditional_values?: Array<Filters0>;
	}>;
	default_values?: {
		max_dropped_ticks?: number;
		max_optimized_distance?: number;
		use_motion_prediction_hints?: boolean;
	};
};
