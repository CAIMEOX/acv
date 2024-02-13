export type Movement = {
	value?:
		| Array<number>
		| number
		| {
				range_min?: number;
				range_max?: number;
		  };
	max?: number;
};
