import { Identifier as Identifier0 } from './../../../../general/feature/identifier';
export type MinecraftRectLayout = {
	description: {
		identifier: Identifier0;
	};
	ratio_of_empty_space?: number;
	feature_areas: Array<{
		feature?: Identifier0;
		area_dimensions?: Array<number>;
	}>;
};
