export type SpellEffects = {
	add_effects?: Array<
		| string
		| {
				amplifier?: number;
				ambient?: boolean;
				duration?: number;
				display_on_screen_animation?: boolean;
				effect?: string;
				visible?: boolean;
		  }
	>;
	remove_effects?: Array<'string'> | string;
};
