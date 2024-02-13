import { Identifier as Identifier0 } from './../../../../general/feature/identifier';
import { Identifier as Identifier1 } from './../../../../general/block/identifier';
export type MinecraftStructureTemplateFeature = {
	description: {
		identifier: Identifier0;
	};
	structure_name: string;
	adjustment_radius?: number;
	facing_direction?: 'north' | 'south' | 'east' | 'west' | 'random';
	constraints: {
		grounded?: {};
		unburied?: {};
		block_intersection?: {
			block_allowlist?: Array<Identifier1>;
			block_whitelist?: Array<Identifier1>;
		};
	};
};
