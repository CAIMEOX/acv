export declare namespace Def {
	type IDEnchant =
		| 'aqua_affinity'
		| 'bane_of_arthropods'
		| 'blast_protection'
		| 'channeling'
		| 'binding'
		| 'curse_of_vanishing'
		| 'depth_strider'
		| 'efficiency'
		| 'feather_falling'
		| 'fire_aspect'
		| 'fire_protection'
		| 'flame'
		| 'fortune'
		| 'frost_walker'
		| 'impaling'
		| 'infinity'
		| 'knockback'
		| 'looting'
		| 'loyalty'
		| 'luck_of_the_sea'
		| 'lure'
		| 'mending'
		| 'multishot'
		| 'piercing'
		| 'projectile_protection'
		| 'protection'
		| 'power'
		| 'punch'
		| 'quick_charge'
		| 'respiration'
		| 'riptide'
		| 'sharpness'
		| 'silk_touch'
		| 'smite'
		| 'soul_speed'
		| 'thorns'
		| 'unbreaking';
	type Enchant = {
		id?: Def.IDEnchant;
		level?: number | Array<number>;
	};
}
export type SpecificEnchants = {
	function?: 'specific_enchants';
	enchants?: Def.IDEnchant | Def.Enchant | Array<Def.Enchant>;
};
