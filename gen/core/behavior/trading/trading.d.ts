import { BiomeItem as BiomeItem0 } from './../../general/biome_item';
import { Functions as Functions0 } from './../loot_tables/functions';
import { FormatVersion as FormatVersion0 } from './../../general/format_version';
export declare namespace Def {
	type Item =
		| string
		| {
				item?: string;
				price_multiplier?: number;
				functions?: Def.Functions;
				biomes?: Array<BiomeItem0>;
				quantity?:
					| number
					| {
							min: number;
							max: number;
					  };
		  };
	type Functions = Array<Functions0>;
	type TradeArray = Array<{
		gives: Array<
			| string
			| {
					item?: string;
					quantity?:
						| number
						| {
								min: number;
								max: number;
						  };
					functions?: Def.Functions;
					choice?: Array<Def.Item>;
			  }
		>;
		wants: Array<
			| string
			| {
					item?: string;
					quantity?:
						| number
						| {
								min: number;
								max: number;
						  };
					price_multiplier?: number;
					functions?: Def.Functions;
					choice?: Array<Def.Item>;
			  }
		>;
		trader_exp?: number;
		max_uses?: number;
		weight?: number;
		reward_exp?: boolean;
	}>;
}
export type Trading = {
	format_version?: FormatVersion0;
	tiers?: Array<{
		trades?: Def.TradeArray;
		total_exp_required?: number;
		groups?: Array<{
			num_to_select?: number;
			trades?: Def.TradeArray;
		}>;
	}>;
};
