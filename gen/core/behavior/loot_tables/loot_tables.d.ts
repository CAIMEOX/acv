import { Conditions as Conditions0 } from './conditions';
import { Functions as Functions0 } from './functions';
export declare namespace Def {
	type PoolsSpec = Array<{
		rolls?:
			| number
			| {
					min: number;
					max: number;
			  };
		type?: 'loot_table' | 'item' | 'empty';
		conditions?: Array<Conditions0>;
		entries?: Array<{
			type: 'item' | 'empty' | 'loot_table';
			count?: number;
			name?: string;
			weight?: number;
			functions?: Array<Functions0>;
			pools?: Def.PoolsSpec;
			quality?: number;
		}>;
		tiers?: {
			bonus_chance?: number;
			bonus_rolls?: number;
			initial_range?: number;
		};
		bonus_rolls?: number;
	}>;
}
export type LootTables = {
	pools?: Def.PoolsSpec;
	type?: 'minecraft:chest';
};
