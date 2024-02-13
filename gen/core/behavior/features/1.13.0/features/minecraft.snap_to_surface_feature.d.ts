import { Identifier as Identifier0 } from './../../../../general/feature/identifier';
export type MinecraftSnapToSurfaceFeature = {
	description: {
		identifier: Identifier0;
	};
	feature_to_snap: Identifier0;
	vertical_search_range: number;
	surface?: 'ceiling' | 'floor';
};
