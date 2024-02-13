import { Reference as Reference0 } from './../../../../general/block/reference';
export type PreferredPath = {
	default_block_cost?: number;
	jump_cost?: number;
	max_fall_blocks?: number;
	preferred_path_blocks?: Array<{
		cost?: number;
		blocks?: Array<Reference0>;
	}>;
};
