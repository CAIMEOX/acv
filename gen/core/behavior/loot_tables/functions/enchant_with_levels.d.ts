export type EnchantWithLevels = {
	function?: 'enchant_with_levels';
	levels?:
		| number
		| {
				min: number;
				max: number;
		  };
	treasure?: boolean;
};
