import { Identifier as Identifier0 } from './../../../../general/block/identifier';
import { Identifier as Identifier1 } from './../../../../general/feature/identifier';
export declare namespace Def {
	type Range = {
		range_max: number;
		range_min: number;
	};
	type RangeOrInt = number | Def.Range;
	type BlocksArray = Array<Array<Identifier0 | number>>;
}
export type MinecraftGrowingPlantFeature = {
	description: {
		identifier: Identifier1;
	};
	age?: Def.RangeOrInt;
	height_distribution: Array<Array<Def.RangeOrInt | number>>;
	growth_direction: 'UP' | 'DOWN' | 'up' | 'down';
	body_blocks: Def.BlocksArray;
	head_blocks: Def.BlocksArray;
	allow_water?: boolean;
};
