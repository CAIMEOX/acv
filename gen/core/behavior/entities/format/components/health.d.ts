export type Health = {
	max?: number;
	value?:
		| number
		| {
				range_min: number;
				range_max: number;
		  };
};
