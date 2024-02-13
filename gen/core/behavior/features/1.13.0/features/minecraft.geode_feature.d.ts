import { Identifier as Identifier0 } from './../../../../general/feature/identifier';
import { Identifier as Identifier1 } from './../../../../general/block/identifier';
export type MinecraftGeodeFeature = {
	description: {
		identifier: Identifier0;
	};
	filler: Identifier1;
	inner_layer: Identifier1;
	alternate_inner_layer: Identifier1;
	middle_layer: Identifier1;
	outer_layer: Identifier1;
	inner_placements?: Array<Identifier1>;
	min_outer_wall_distance: number;
	max_outer_wall_distance: number;
	min_distribution_points: number;
	max_distribution_points: number;
	min_point_offset: number;
	max_point_offset: number;
	max_radius: number;
	crack_point_offset: number;
	generate_crack_chance: number;
	base_crack_size: number;
	noise_multiplier: number;
	use_potential_placements_chance: number;
	use_alternate_layer0_chance: number;
	placements_require_layer0_alternate: boolean;
	invalid_blocks_threshold: number;
};
