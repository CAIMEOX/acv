import { Number as Number0 } from './../../../../molang/number';
import { Identifier as Identifier0 } from './../../../../general/feature/identifier';
export declare namespace Def {
	type Coordinate =
		| Number0
		| {
				distribution:
					| 'uniform'
					| 'gaussian'
					| 'inverse_gaussian'
					| 'fixed_grid'
					| 'jittered_grid';
				step_size?: number;
				grid_offset?: number;
				extent: Array<Number0>;
		  };
}
export type MinecraftScatterFeature = {
	description: {
		identifier: Identifier0;
	};
	places_feature: Identifier0;
	project_input_to_floor?: boolean;
	iterations?: Number0;
	scatter_chance?:
		| {
				numerator?: number;
				denominator?: number;
		  }
		| Number0;
	coordinate_eval_order?: 'xyz' | 'xzy' | 'yxz' | 'yzx' | 'zxy' | 'zyx';
	x?: Def.Coordinate;
	y?: Def.Coordinate;
	z?: Def.Coordinate;
};
