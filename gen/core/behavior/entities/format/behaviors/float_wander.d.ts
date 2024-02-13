import { Priority as Priority0 } from './types/priority';
import { RangeNumberType as RangeNumberType0 } from './../types/range_number_type';
export type FloatWander = {
	priority?: Priority0;
	xz_dist?: number;
	y_dist?: number;
	y_offset?: number;
	must_reach?: boolean;
	random_reselect?: boolean;
	float_duration?: RangeNumberType0;
};
