export type RangeNumberType =
	| number
	| Array<number>
	| {
			range_min?: number;
			range_max?: number;
	  };
