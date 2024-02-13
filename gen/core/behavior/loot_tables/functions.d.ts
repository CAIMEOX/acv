import { EnchantRandomGear as EnchantRandomGear0 } from './functions/enchant_random_gear';
import { EnchantBookForTrading as EnchantBookForTrading0 } from './functions/enchant_book_for_trading';
import { EnchantRandomly as EnchantRandomly0 } from './functions/enchant_randomly';
import { EnchantWithLevels as EnchantWithLevels0 } from './functions/enchant_with_levels';
import { ExplorationMap as ExplorationMap0 } from './functions/exploration_map';
import { FillContainer as FillContainer0 } from './functions/fill_container';
import { FurnaceSmelt as FurnaceSmelt0 } from './functions/furnace_smelt';
import { LootingEnchant as LootingEnchant0 } from './functions/looting_enchant';
import { RandomAuxValue as RandomAuxValue0 } from './functions/random_aux_value';
import { RandomBlockState as RandomBlockState0 } from './functions/random_block_state';
import { SetActorId as SetActorId0 } from './functions/set_actor_id';
import { SetBannerDetails as SetBannerDetails0 } from './functions/set_banner_details';
import { SetBookContents as SetBookContents0 } from './functions/set_book_contents';
import { SetCount as SetCount0 } from './functions/set_count';
import { SetDamage as SetDamage0 } from './functions/set_damage';
import { SetData as SetData0 } from './functions/set_data';
import { SetDataFromColorIndex as SetDataFromColorIndex0 } from './functions/set_data_from_color_index';
import { TraderMaterialType as TraderMaterialType0 } from './functions/trader_material_type';
import { RandomDye as RandomDye0 } from './functions/random_dye';
import { SetLore as SetLore0 } from './functions/set_lore';
import { SetName as SetName0 } from './functions/set_name';
import { SpecificEnchants as SpecificEnchants0 } from './functions/specific_enchants';
export type Functions = {
	function?:
		| 'enchant_book_for_trading'
		| 'enchant_random_gear'
		| 'enchant_randomly'
		| 'enchant_with_levels'
		| 'exploration_map'
		| 'fill_container'
		| 'furnace_smelt'
		| 'looting_enchant'
		| 'random_aux_value'
		| 'random_block_state'
		| 'random_dye'
		| 'set_actor_id'
		| 'set_banner_details'
		| 'set_book_contents'
		| 'set_count'
		| 'set_damage'
		| 'set_data_from_color_index'
		| 'set_data'
		| 'set_lore'
		| 'set_name'
		| 'specific_enchants'
		| 'trader_material_type'
		| 'minecraft:enchant_book_for_trading'
		| 'minecraft:enchant_random_gear'
		| 'minecraft:enchant_randomly'
		| 'minecraft:enchant_with_levels'
		| 'minecraft:exploration_map'
		| 'minecraft:fill_container'
		| 'minecraft:furnace_smelt'
		| 'minecraft:looting_enchant'
		| 'minecraft:random_aux_value'
		| 'minecraft:random_block_state'
		| 'minecraft:random_dye'
		| 'minecraft:set_actor_id'
		| 'minecraft:set_banner_details'
		| 'minecraft:set_book_contents'
		| 'minecraft:set_count'
		| 'minecraft:set_damage'
		| 'minecraft:set_data_from_color_index'
		| 'minecraft:set_data'
		| 'minecraft:set_lore'
		| 'minecraft:set_name'
		| 'minecraft:specific_enchants'
		| 'minecraft:trader_material_type';
	add?: boolean;
} & (
	| ({
			function?: string;
	  } & EnchantRandomGear0)
	| ({
			function?: string;
	  } & EnchantBookForTrading0)
	| ({
			function?: string;
	  } & EnchantRandomly0)
	| ({
			function?: string;
	  } & EnchantWithLevels0)
	| ({
			function?: string;
	  } & ExplorationMap0)
	| ({
			function?: string;
	  } & FillContainer0)
	| ({
			function?: string;
	  } & FurnaceSmelt0)
	| ({
			function?: string;
	  } & LootingEnchant0)
	| ({
			function?: string;
	  } & RandomAuxValue0)
	| ({
			function?: string;
	  } & RandomBlockState0)
	| ({
			function?: string;
	  } & SetActorId0)
	| ({
			function?: string;
	  } & SetBannerDetails0)
	| ({
			function?: string;
	  } & SetBookContents0)
	| ({
			function?: string;
	  } & SetCount0)
	| ({
			function?: string;
	  } & SetDamage0)
	| ({
			function?: string;
	  } & SetData0)
	| ({
			function?: string;
	  } & SetDataFromColorIndex0)
	| ({
			function?: string;
	  } & TraderMaterialType0)
	| ({
			function?: string;
	  } & RandomDye0)
	| ({
			function?: string;
	  } & SetLore0)
	| ({
			function?: string;
	  } & SetName0)
	| ({
			function?: string;
	  } & SpecificEnchants0)
);
