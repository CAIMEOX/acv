import { Identifier as Identifier0 } from './../../../../general/feature/identifier';
export type MinecraftSearchFeature = {
	description: {
		identifier: Identifier0;
	};
	places_feature?: Identifier0;
	search_volume?: {
		max: Array<number>;
		min: Array<number>;
	};
	search_axis: '-x' | '+x' | '-y' | '+y' | '-z' | '+z';
	required_successes?: number;
};
