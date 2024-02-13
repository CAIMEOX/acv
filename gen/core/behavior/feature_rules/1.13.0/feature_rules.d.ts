import { Number as Number0 } from './../../../molang/number';
import { Identifier as Identifier0 } from './../../../general/feature/identifier';
import { Filters as Filters0 } from './../../entities/filters/filters';
export declare namespace Def {
	type CoordDist =
		| Number0
		| {
				numerator?: number;
				denominator?: number;
		  };
}
export type FeatureRules = {
	format_version: '1.13.0';
	'minecraft:feature_rules': {
		description: {
			identifier: Identifier0;
			places_feature: string;
		};
		conditions: {
			placement_pass:
				| 'pregeneration_pass'
				| 'first_pass'
				| 'before_underground_pass'
				| 'underground_pass'
				| 'after_underground_pass'
				| 'before_surface_pass'
				| 'surface_pass'
				| 'after_surface_pass'
				| 'before_sky_pass'
				| 'sky_pass'
				| 'after_sky_pass'
				| 'final_pass';
			'minecraft:biome_filter'?: Filters0;
		};
		distribution?: {
			coordinate_eval_order?: 'xyz' | 'xzy' | 'yxz' | 'yzx' | 'zxy' | 'zyx';
			iterations: Number0;
			scatter_chance?:
				| Number0
				| {
						numerator?: number;
						denominator?: number;
				  };
			x?: Def.CoordDist;
			z?: Def.CoordDist;
			y?: Def.CoordDist;
		};
	};
};
