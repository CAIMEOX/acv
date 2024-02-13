export type SetData = {
	function?: 'set_data';
	data?:
		| number
		| {
				min?: number;
				max?: number;
		  };
};
