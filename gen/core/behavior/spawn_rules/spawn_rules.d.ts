import { FormatVersion as FormatVersion0 } from './../../general/format_version';
import { Identifier as Identifier0 } from './../../general/entity/identifier';
import { BiomeFilter as BiomeFilter0 } from './components/biome_filter';
import { BrightnessFilter as BrightnessFilter0 } from './components/brightness_filter';
import { DelayFilter as DelayFilter0 } from './components/delay_filter';
import { DensityLimit as DensityLimit0 } from './components/density_limit';
import { DifficultyFilter as DifficultyFilter0 } from './components/difficulty_filter';
import { DisallowSpawnsInBubble as DisallowSpawnsInBubble0 } from './components/disallow_spawns_in_bubble';
import { DistanceFilter as DistanceFilter0 } from './components/distance_filter';
import { HeightFilter as HeightFilter0 } from './components/height_filter';
import { EntityTypes as EntityTypes0 } from './components/entity_types';
import { Herd as Herd0 } from './components/herd';
import { MobEventFilter as MobEventFilter0 } from './components/mob_event_filter';
import { PermuteType as PermuteType0 } from './components/permute_type';
import { PlayerInVillageFilter as PlayerInVillageFilter0 } from './components/player_in_village_filter';
import { SpawnEvent as SpawnEvent0 } from './components/spawn_event';
import { SpawnsAboveBlockFilter as SpawnsAboveBlockFilter0 } from './components/spawns_above_block_filter';
import { SpawnsLava as SpawnsLava0 } from './components/spawns_lava';
import { SpawnsOnBlockFilter as SpawnsOnBlockFilter0 } from './components/spawns_on_block_filter';
import { SpawnsOnBlockPreventedFilter as SpawnsOnBlockPreventedFilter0 } from './components/spawns_on_block_prevented_filter';
import { SpawnsOnSurface as SpawnsOnSurface0 } from './components/spawns_on_surface';
import { SpawnsUnderground as SpawnsUnderground0 } from './components/spawns_underground';
import { SpawnsUnderwater as SpawnsUnderwater0 } from './components/spawns_underwater';
import { Weight as Weight0 } from './components/weight';
import { WorldAgeFilter as WorldAgeFilter0 } from './components/world_age_filter';
export type SpawnRules = {
	format_version: FormatVersion0;
	'minecraft:spawn_rules': {
		description?: {
			identifier: Identifier0;
			population_control: 'ambient' | 'animal' | 'water_animal' | 'monster' | 'cat';
		};
		conditions?: Array<{
			'minecraft:biome_filter'?: BiomeFilter0;
			'minecraft:brightness_filter'?: BrightnessFilter0;
			'minecraft:delay_filter'?: DelayFilter0;
			'minecraft:density_limit'?: DensityLimit0;
			'minecraft:difficulty_filter'?: DifficultyFilter0;
			'minecraft:disallow_spawns_in_bubble'?: DisallowSpawnsInBubble0;
			'minecraft:distance_filter'?: DistanceFilter0;
			'minecraft:height_filter'?: HeightFilter0;
			'minecraft:entity_types'?: EntityTypes0;
			'minecraft:herd'?: Herd0;
			'minecraft:mob_event_filter'?: MobEventFilter0;
			'minecraft:permute_type'?: PermuteType0;
			'minecraft:player_in_village_filter'?: PlayerInVillageFilter0;
			'minecraft:spawn_event'?: SpawnEvent0;
			'minecraft:spawns_above_block_filter'?: SpawnsAboveBlockFilter0;
			'minecraft:spawns_lava'?: SpawnsLava0;
			'minecraft:spawns_on_block_filter'?: SpawnsOnBlockFilter0;
			'minecraft:spawns_on_block_prevented_filter'?: SpawnsOnBlockPreventedFilter0;
			'minecraft:spawns_on_surface'?: SpawnsOnSurface0;
			'minecraft:spawns_underground'?: SpawnsUnderground0;
			'minecraft:spawns_underwater'?: SpawnsUnderwater0;
			'minecraft:weight'?: Weight0;
			'minecraft:world_age_filter'?: WorldAgeFilter0;
		}>;
	};
};
