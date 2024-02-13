export type Shooter = {
	ammunition?: Array<{
		item?: string;
		use_offhand?: boolean;
		search_inventory?: boolean;
		use_in_creative?: boolean;
	}>;
	charge_on_draw?: boolean;
	max_draw_duration?: number;
	scale_power_by_draw_duration?: boolean;
};
