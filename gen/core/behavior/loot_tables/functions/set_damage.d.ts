export type SetDamage = {
	add?: boolean;
	function?: 'set_damage';
	damage?:
		| number
		| {
				min?: number;
				max?: number;
		  };
};
