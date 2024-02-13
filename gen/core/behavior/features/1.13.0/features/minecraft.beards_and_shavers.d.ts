import { Identifier as Identifier0 } from './../../../../general/feature/identifier';
import { Identifier as Identifier1 } from './../../../../general/block/identifier';
export type MinecraftBeardsAndShavers = {
	description: {
		identifier: Identifier0;
	};
	places_feature: Identifier0;
	bounding_box_min: Array<number>;
	bounding_box_max: Array<number>;
	y_delta: number;
	surface_block_type: Identifier1;
	subsurface_block_type: Identifier1;
	beard_raggedness_min?: number;
	beard_raggedness_max?: number;
};
