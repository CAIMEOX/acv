import { Number as Number0 } from './../../../molang/number';
export declare namespace Def {
	type Coordinate =
		| Number0
		| number
		| {
				distribution:
					| 'uniform'
					| 'gaussian'
					| 'inverse_gaussian'
					| 'triangle'
					| 'fixed_grid'
					| 'jittered_grid';
				extent: Array<Number0>;
				grid_offset?: number;
				step_size?: number;
		  };
	type Iteration = {
		coordinate_eval_order?: 'xyz' | 'xzy' | 'yxz' | 'yzx' | 'zxy' | 'zyx';
		identifier: string;
		iterations: Number0;
		places_feature: string;
		scatter_chance?:
			| {
					denominator?: number;
					numerator?: number;
			  }
			| Number0
			| number;
		x?: Def.Coordinate;
		y?: Def.Coordinate;
		z?: Def.Coordinate;
	};
}
export type ForcedFeatures = {
	after_sky_pass?: Array<Def.Iteration>;
	after_surface_pass?: Array<Def.Iteration>;
	after_underground_pass?: Array<Def.Iteration>;
	before_sky_pass?: Array<Def.Iteration>;
	before_surface_pass?: Array<Def.Iteration>;
	before_underground_pass?: Array<Def.Iteration>;
	final_pass?: Array<Def.Iteration>;
	first_pass?: Array<Def.Iteration>;
	surface_pass?: Array<Def.Iteration>;
	sky_pass?: Array<Def.Iteration>;
	underground_pass?: Array<Def.Iteration>;
};
