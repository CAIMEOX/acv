import { Operator as Operator0 } from './types/operator';
import { Subject as Subject0 } from './types/subject';
export type IsBiome = {
	test?: string;
	operator?: Operator0;
	subject?: Subject0;
	value:
		| 'beach'
		| 'desert'
		| 'extreme_hills'
		| 'flat'
		| 'forest'
		| 'ice'
		| 'jungle'
		| 'mesa'
		| 'mushroom_island'
		| 'ocean'
		| 'plain'
		| 'river'
		| 'savanna'
		| 'stone_beach'
		| 'swamp'
		| 'taiga'
		| 'the_end'
		| 'the_nether';
};
