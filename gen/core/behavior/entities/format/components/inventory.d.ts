export type Inventory = {
	additional_slots_per_strength?: number;
	can_be_siphoned_from?: boolean;
	container_type?:
		| 'horse'
		| 'minecart_chest'
		| 'chest_boat'
		| 'minecart_hopper'
		| 'inventory'
		| 'container'
		| 'hopper';
	inventory_size?: number;
	private?: boolean;
	restrict_to_owner?: boolean;
};
