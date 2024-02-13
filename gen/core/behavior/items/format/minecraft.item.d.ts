import { Identifier as Identifier0 } from './../../../general/item/identifier';
import { Armor as Armor0 } from './components/armor';
import { BlockPlacer as BlockPlacer0 } from './components/block_placer';
import { Cooldown as Cooldown0 } from './components/cooldown';
import { Digger as Digger0 } from './components/digger';
import { DisplayName as DisplayName0 } from './components/display_name';
import { Durability as Durability0 } from './components/durability';
import { DyePowder as DyePowder0 } from './components/dye_powder';
import { EntityPlacer as EntityPlacer0 } from './components/entity_placer';
import { Foil as Foil0 } from './components/foil';
import { Food as Food0 } from './components/food';
import { Fuel as Fuel0 } from './components/fuel';
import { HandEquipped as HandEquipped0 } from './components/hand_equipped';
import { Icon as Icon0 } from './components/icon';
import { KnockbackResistance as KnockbackResistance0 } from './components/knockback_resistance';
import { MaxDamage as MaxDamage0 } from './components/max_damage';
import { MaxStackSize as MaxStackSize0 } from './components/max_stack_size';
import { OnUseOn as OnUseOn0 } from './components/on_use_on';
import { OnUse as OnUse0 } from './components/on_use';
import { Projectile as Projectile0 } from './components/projectile';
import { RenderOffsets as RenderOffsets0 } from './components/render_offsets';
import { Repairable as Repairable0 } from './components/repairable';
import { Shooter as Shooter0 } from './components/shooter';
import { Throwable as Throwable0 } from './components/throwable';
import { UseDuration as UseDuration0 } from './components/use_duration';
import { Weapon as Weapon0 } from './components/weapon';
import { Wearable as Wearable0 } from './components/wearable';
import { Events as Events0 } from './events';
export type MinecraftItem = {
	description: {
		identifier?: Identifier0;
		is_experimental?: boolean;
		menu_category?: {
			group?: string;
			category?: string;
			is_hidden_in_commands?: boolean;
		};
	};
	components?: {
		'minecraft:armor'?: Armor0;
		'minecraft:block_placer'?: BlockPlacer0;
		'minecraft:cooldown'?: Cooldown0;
		'minecraft:digger'?: Digger0;
		'minecraft:display_name'?: DisplayName0;
		'minecraft:durability'?: Durability0;
		'minecraft:dye_powder'?: DyePowder0;
		'minecraft:entity_placer'?: EntityPlacer0;
		'minecraft:foil'?: Foil0;
		'minecraft:food'?: Food0;
		'minecraft:fuel'?: Fuel0;
		'minecraft:hand_equipped'?: HandEquipped0;
		'minecraft:icon'?: Icon0;
		'minecraft:knockback_resistance'?: KnockbackResistance0;
		'minecraft:max_damage'?: MaxDamage0;
		'minecraft:max_stack_size'?: MaxStackSize0;
		'minecraft:on_use_on'?: OnUseOn0;
		'minecraft:on_use'?: OnUse0;
		'minecraft:projectile'?: Projectile0;
		'minecraft:render_offsets'?: RenderOffsets0;
		'minecraft:repairable'?: Repairable0;
		'minecraft:shooter'?: Shooter0;
		'minecraft:stacked_by_data'?: KnockbackResistance0;
		'minecraft:throwable'?: Throwable0;
		'minecraft:use_duration'?: UseDuration0;
		'minecraft:weapon'?: Weapon0;
		'minecraft:wearable'?: Wearable0;
	};
	events?: Events0;
};