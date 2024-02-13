export type Digger = {
	use_efficiency?: boolean;
	destroy_speeds: Array<{
		speed?: number;
		on_dig?: string;
		block?:
			| string
			| {
					any_tag?: Array<string>;
			  };
	}>;
	on_dig?: string;
};
