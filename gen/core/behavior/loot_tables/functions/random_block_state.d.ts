export type RandomBlockState = {
	function?: 'random_block_state';
	block_state?: string;
	values?: {
		min?: number;
		max?: number;
	};
};
