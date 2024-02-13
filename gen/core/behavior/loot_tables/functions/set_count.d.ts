export type SetCount = {
	add?: boolean;
	function?: 'set_count';
	count?:
		| number
		| {
				min?: number;
				max?: number;
		  };
};
