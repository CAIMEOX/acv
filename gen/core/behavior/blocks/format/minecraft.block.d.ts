import { CollisionBox as CollisionBox0 } from './components/collision_box';
import { CraftingTable as CraftingTable0 } from './components/crafting_table';
import { DestructibleByExplosion as DestructibleByExplosion0 } from './components/destructible_by_explosion';
import { DestructibleByMining as DestructibleByMining0 } from './components/destructible_by_mining';
import { DisplayName as DisplayName0 } from './components/display_name';
import { Flammable as Flammable0 } from './components/flammable';
import { Friction as Friction0 } from './components/friction';
import { Geometry as Geometry0 } from './components/geometry';
import { LightDampening as LightDampening0 } from './components/light_dampening';
import { LightEmission as LightEmission0 } from './components/light_emission';
import { Loot as Loot0 } from './components/loot';
import { MapColor as MapColor0 } from './components/map_color';
import { MaterialInstances as MaterialInstances0 } from './components/material_instances';
import { PartVisibility as PartVisibility0 } from './components/part_visibility';
import { PlacementFilter as PlacementFilter0 } from './components/placement_filter';
import { SelectionBox as SelectionBox0 } from './components/selection_box';
import { Transformation as Transformation0 } from './components/transformation';
import { UnitCube as UnitCube0 } from './components/unit_cube';
import { OnFallOn as OnFallOn0 } from './triggers/on_fall_on';
import { OnInteract as OnInteract0 } from './triggers/on_interact';
import { OnPlaced as OnPlaced0 } from './triggers/on_placed';
import { OnPlayerDestroyed as OnPlayerDestroyed0 } from './triggers/on_player_destroyed';
import { OnPlayerPlacing as OnPlayerPlacing0 } from './triggers/on_player_placing';
import { OnStepOff as OnStepOff0 } from './triggers/on_step_off';
import { OnStepOn as OnStepOn0 } from './triggers/on_step_on';
import { QueuedTicking as QueuedTicking0 } from './triggers/queued_ticking';
import { RandomTicking as RandomTicking0 } from './triggers/random_ticking';
import { Identifier as Identifier0 } from './../../../general/block/identifier';
import { Events as Events0 } from './events';
import { String as String0 } from './../../../molang/string';
export declare namespace Def {
	type ComponentsRef = {
		'minecraft:collision_box'?: CollisionBox0;
		'minecraft:crafting_table'?: CraftingTable0;
		'minecraft:destructible_by_explosion'?: DestructibleByExplosion0;
		'minecraft:destructible_by_mining'?: DestructibleByMining0;
		'minecraft:display_name'?: DisplayName0;
		'minecraft:flammable'?: Flammable0;
		'minecraft:friction'?: Friction0;
		'minecraft:geometry'?: Geometry0;
		'minecraft:light_dampening'?: LightDampening0;
		'minecraft:light_emission'?: LightEmission0;
		'minecraft:loot'?: Loot0;
		'minecraft:map_color'?: MapColor0;
		'minecraft:material_instances'?: MaterialInstances0;
		'minecraft:part_visibility'?: PartVisibility0;
		'minecraft:placement_filter'?: PlacementFilter0;
		'minecraft:selection_box'?: SelectionBox0;
		'minecraft:transformation'?: Transformation0;
		'minecraft:unit_cube'?: UnitCube0;
		'minecraft:on_fall_on'?: OnFallOn0;
		'minecraft:on_interact'?: OnInteract0;
		'minecraft:on_placed'?: OnPlaced0;
		'minecraft:on_player_destroyed'?: OnPlayerDestroyed0;
		'minecraft:on_player_placing'?: OnPlayerPlacing0;
		'minecraft:on_step_off'?: OnStepOff0;
		'minecraft:on_step_on'?: OnStepOn0;
		'minecraft:queued_ticking'?: QueuedTicking0;
		'minecraft:random_ticking'?: RandomTicking0;
	};
}
export type MinecraftBlock = {
	description: {
		menu_category?: {
			category: 'construction' | 'nature' | 'equipment' | 'items' | 'none';
			group?:
				| 'itemGroup.name.anvil'
				| 'itemGroup.name.arrow'
				| 'itemGroup.name.axe'
				| 'itemGroup.name.banner_pattern'
				| 'itemGroup.name.banner'
				| 'itemGroup.name.beacon'
				| 'itemGroup.name.bed'
				| 'itemGroup.name.bell'
				| 'itemGroup.name.boat'
				| 'itemGroup.name.boots'
				| 'itemGroup.name.brick'
				| 'itemGroup.name.buttons'
				| 'itemGroup.name.cactus'
				| 'itemGroup.name.camera'
				| 'itemGroup.name.candles'
				| 'itemGroup.name.chemistrytable'
				| 'itemGroup.name.chest'
				| 'itemGroup.name.chestboat'
				| 'itemGroup.name.chestplate'
				| 'itemGroup.name.clay'
				| 'itemGroup.name.climbing'
				| 'itemGroup.name.cobblestone'
				| 'itemGroup.name.composter'
				| 'itemGroup.name.concrete'
				| 'itemGroup.name.concretePowder'
				| 'itemGroup.name.constructionMisc'
				| 'itemGroup.name.cookedFood'
				| 'itemGroup.name.copper'
				| 'itemGroup.name.coral_decorations'
				| 'itemGroup.name.coral'
				| 'itemGroup.name.craftingTables'
				| 'itemGroup.name.crop'
				| 'itemGroup.name.dirt'
				| 'itemGroup.name.door'
				| 'itemGroup.name.dye'
				| 'itemGroup.name.eggBlocks'
				| 'itemGroup.name.element'
				| 'itemGroup.name.enchantedBook'
				| 'itemGroup.name.enchantingTable'
				| 'itemGroup.name.endPortalFrame'
				| 'itemGroup.name.endRod'
				| 'itemGroup.name.fence'
				| 'itemGroup.name.fenceGate'
				| 'itemGroup.name.firework'
				| 'itemGroup.name.fireworkStars'
				| 'itemGroup.name.flower'
				| 'itemGroup.name.furnaces'
				| 'itemGroup.name.glass'
				| 'itemGroup.name.glassPane'
				| 'itemGroup.name.glazedTerracotta'
				| 'itemGroup.name.glowstone'
				| 'itemGroup.name.goatHorn'
				| 'itemGroup.name.grass'
				| 'itemGroup.name.gravel'
				| 'itemGroup.name.greenery'
				| 'itemGroup.name.grindStone'
				| 'itemGroup.name.helmet'
				| 'itemGroup.name.hoe'
				| 'itemGroup.name.horseArmor'
				| 'itemGroup.name.ice'
				| 'itemGroup.name.ironFence'
				| 'itemGroup.name.items'
				| 'itemGroup.name.leaves'
				| 'itemGroup.name.lectern'
				| 'itemGroup.name.leggings'
				| 'itemGroup.name.lights'
				| 'itemGroup.name.lingeringPotion'
				| 'itemGroup.name.log'
				| 'itemGroup.name.minecart'
				| 'itemGroup.name.miscFood'
				| 'itemGroup.name.mobEgg'
				| 'itemGroup.name.monsterStoneEgg'
				| 'itemGroup.name.mushroom'
				| 'itemGroup.name.musicBlocks'
				| 'itemGroup.name.natureBuildingBlocks'
				| 'itemGroup.name.natureMisc'
				| 'itemGroup.name.ore'
				| 'itemGroup.name.oreBlocks'
				| 'itemGroup.name.permission'
				| 'itemGroup.name.pickaxe'
				| 'itemGroup.name.pistons'
				| 'itemGroup.name.planks'
				| 'itemGroup.name.potion'
				| 'itemGroup.name.pressurePlate'
				| 'itemGroup.name.pumpkins'
				| 'itemGroup.name.purpur'
				| 'itemGroup.name.rail'
				| 'itemGroup.name.rawFood'
				| 'itemGroup.name.record'
				| 'itemGroup.name.redstone'
				| 'itemGroup.name.redstoneContainers'
				| 'itemGroup.name.redstoneProducers'
				| 'itemGroup.name.sand'
				| 'itemGroup.name.sandstone'
				| 'itemGroup.name.sapling'
				| 'itemGroup.name.sculk'
				| 'itemGroup.name.seed'
				| 'itemGroup.name.shovel'
				| 'itemGroup.name.shulkerBox'
				| 'itemGroup.name.sign'
				| 'itemGroup.name.skull'
				| 'itemGroup.name.slab'
				| 'itemGroup.name.splashPotion'
				| 'itemGroup.name.stainedClay'
				| 'itemGroup.name.stairs'
				| 'itemGroup.name.stone'
				| 'itemGroup.name.stoneBrick'
				| 'itemGroup.name.sword'
				| 'itemGroup.name.tnt'
				| 'itemGroup.name.torch'
				| 'itemGroup.name.trapdoor'
				| 'itemGroup.name.walls'
				| 'itemGroup.name.wood'
				| 'itemGroup.name.wool'
				| 'itemGroup.name.woolCarpet';
			is_hidden_in_commands?: boolean;
		};
		identifier: Identifier0;
		is_experimental?: boolean;
		register_to_creative_menu?: boolean;
		states?: {
			[prop: string]: Array<boolean | number | string> | {};
		};
	};
	events?: Events0;
	components: Def.ComponentsRef;
	permutations?: Array<{
		condition?: String0;
		components?: Def.ComponentsRef;
	}>;
};
