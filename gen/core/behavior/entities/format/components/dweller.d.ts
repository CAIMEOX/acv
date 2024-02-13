export type Dweller = {
	dwelling_type?: 'village';
	dweller_role?: 'inhabitant' | 'defender' | 'hostile' | 'passive';
	update_interval_base?: number;
	update_interval_variant?: number;
	can_find_poi?: boolean;
	first_founding_reward?: number;
	can_migrate?: boolean;
	dwelling_bounds_tolerance?: number;
	preferred_profession?: string;
};
