import { Identifier as Identifier0 } from './../../../../general/feature/identifier';
import { Identifier as Identifier1 } from './../../../../general/block/identifier';
export type MinecraftVegetationPatchFeature = {
	description: {
		identifier: Identifier0;
	};
	replaceable_blocks?: Array<Identifier1>;
	ground_block?: Identifier1;
	vegetation_feature?: Identifier0;
	surface?: string;
	depth?: number;
	extra_deep_block_chance?: number;
	vertical_range?: number;
	vegetation_chance?: number;
	horizontal_radius?: number;
	extra_edge_column_chance?: number;
	waterlogged?: boolean;
};
