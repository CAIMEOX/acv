import { Identifier as Identifier0 } from './../../../../general/block/identifier';
import { ChanceInformation as ChanceInformation0 } from './../../../../general/1.14.0/chance_information';
import { Identifier as Identifier1 } from './../../../../general/feature/identifier';
export declare namespace Def {
	type BranchCanopy = {
		acacia_canopy?: {
			canopy_size?: number;
			leaf_block?: Identifier0;
			simplify_canopy?: boolean;
		};
		canopy?: {
			canopy_offset?: {
				min?: number;
				max?: number;
			};
			min_width?: number;
			canopy_slope?: {
				rise?: number;
				run?: number;
			};
			variation_chance?: ChanceInformation0 | number;
			leaf_block?: Identifier0;
			canopy_decoration?: {
				decoration_chance?: ChanceInformation0;
				decoration_block?: Identifier0;
				num_steps?: number;
				step_direction?: 'down' | 'up' | 'out' | 'away';
			};
		};
		fancy_canopy?: {
			height?: number;
			radius?: number;
			leaf_block?: Identifier0;
		};
		mega_canopy?: {
			canopy_height?: number;
			base_radius?: number;
			core_width?: number;
			simplify_canopy?: boolean;
			leaf_block?: Identifier0;
		};
		mega_pine_canopy?: {
			canopy_height?: number;
			base_radius?: number;
			radius_step_modifier?: number;
			core_width?: number;
			leaf_block?: Identifier0;
		};
		pine_canopy?: {
			canopy_height?: number;
			base_radius?: number;
			leaf_block?: Identifier0;
		};
		roofed_canopy?: {
			canopy_height?: number;
			core_width?: number;
			outer_radius?: number;
			inner_radius?: number;
			leaf_block?: Identifier0;
		};
		spruce_canopy?: {
			lower_offset?: number;
			upper_offset?: number;
			max_radius?: number;
			leaf_block?: Identifier0;
		};
	};
}
export type MinecraftTreeFeature = {
	description: {
		identifier: Identifier1;
	};
	base_block?: Identifier0 | Array<Identifier0>;
	base_cluster?: {
		may_replace: Array<Identifier0>;
		num_clusters: number;
		cluster_radius: number;
	};
	may_grow_on?: Array<Identifier0>;
	may_replace?: Array<Identifier0>;
	may_grow_through?: Array<Identifier0>;
	acacia_trunk?: {
		trunk_width?: number;
		trunk_height?: {
			base?: number;
			intervals?: Array<number>;
			min_height_for_canopy?: number;
		};
		trunk_lean?: {
			allow_diagonal_growth?: number;
			lean_height?: string;
			lean_steps?: string;
			lean_length?: string;
		};
		trunk_block?: Identifier0;
		branches?: {
			branch_length?: number;
			branch_position?: number;
			branch_chance?: ChanceInformation0;
			branch_canopy?: Def.BranchCanopy;
			trunk_decoration?: {
				decoration_chance?: ChanceInformation0;
				decoration_block?: Identifier0;
				num_steps?: number;
				step_direction?: 'down' | 'up' | 'out' | 'away';
			};
		};
	};
	fallen_trunk?: {
		log_length?: number;
		stump_height?: number;
		height_modifier?: number;
		trunk_block?: Identifier0;
		log_decoration_feature?: Identifier1;
		trunk_decoration?: {
			decoration_chance?: ChanceInformation0;
			decoration_block?: Identifier0;
			num_steps?: number;
			step_direction?: 'down' | 'up' | 'out' | 'away';
		};
	};
	fancy_trunk?: {
		trunk_height?: {
			base?: number;
			variance?: number;
			scale?: number;
		};
		trunk_width?: number;
		branches?: {
			slope?: number;
			density?: number;
			min_altitude_factor?: number;
		};
		trunk_block?: Identifier0;
		width_scale?: number;
		foliage_altitude_factor?: number;
	};
	mega_trunk?: {
		trunk_width?: number;
		trunk_height?: {
			base?: number;
			intervals?: Array<number>;
		};
		trunk_block?: Identifier0;
		trunk_decoration?: {
			decoration_chance?: ChanceInformation0;
			decoration_block?: Identifier0;
			num_steps?: number;
			step_direction?: 'down' | 'up' | 'out' | 'away';
		};
		branches?: {
			branch_length?: number;
			branch_slope?: number;
			branch_interval?: number;
			branch_altitude_factor?: {
				min?: number;
				max?: number;
			};
			branch_canopy?: Def.BranchCanopy;
		};
	};
	trunk?: {
		trunk_height?: number;
		height_modifier?: number;
		can_be_submerged?:
			| {
					max_depth?: number;
			  }
			| boolean;
		trunk_block?: Identifier0;
		trunk_decoration?: {
			decoration_chance?: ChanceInformation0;
			decoration_block?: Identifier0;
			num_steps?: number;
			step_direction?: 'down' | 'up' | 'out' | 'away';
		};
	};
	acacia_canopy?: {
		canopy_size?: number;
		leaf_block?: Identifier0;
		simplify_canopy?: boolean;
	};
	canopy?: {
		canopy_offset?: {
			min?: number;
			max?: number;
		};
		min_width?: number;
		canopy_slope?: {
			rise?: number;
			run?: number;
		};
		variation_chance?: ChanceInformation0 | number;
		leaf_block?: Identifier0;
		canopy_decoration?: {
			decoration_chance?: ChanceInformation0;
			decoration_block?: Identifier0;
			num_steps?: number;
			step_direction?: 'down' | 'up' | 'out' | 'away';
		};
	};
	fancy_canopy?: {
		height?: number;
		radius?: number;
		leaf_block?: Identifier0;
	};
	mega_canopy?: {
		canopy_height?: number;
		base_radius?: number;
		core_width?: number;
		simplify_canopy?: boolean;
		leaf_block?: Identifier0;
	};
	mega_pine_canopy?: {
		canopy_height?: number;
		base_radius?: number;
		radius_step_modifier?: number;
		core_width?: number;
		leaf_block?: Identifier0;
	};
	pine_canopy?: {
		canopy_height?: number;
		base_radius?: number;
		leaf_block?: Identifier0;
	};
	roofed_canopy?: {
		canopy_height?: number;
		core_width?: number;
		outer_radius?: number;
		inner_radius?: number;
		leaf_block?: Identifier0;
	};
	spruce_canopy?: {
		lower_offset?: number;
		upper_offset?: number;
		max_radius?: number;
		leaf_block?: Identifier0;
	};
	random_spread_canopy?: {
		canopy_height?: number;
		canopy_radius?: number;
		leaf_placement_attempts?: number;
		leaf_blocks?: Array<Array<number>>;
	};
};
