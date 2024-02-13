import { Priority as Priority0 } from './types/priority';
import { RangeNumberType as RangeNumberType0 } from './../types/range_number_type';
import { Filters as Filters0 } from './../../filters/filters';
export type LookAtEntity = {
	priority?: Priority0;
	look_distance?: number;
	probability?: number;
	look_time?: RangeNumberType0;
	angle_of_view_vertical?: number;
	angle_of_view_horizontal?: number;
	filters?: Filters0;
};
