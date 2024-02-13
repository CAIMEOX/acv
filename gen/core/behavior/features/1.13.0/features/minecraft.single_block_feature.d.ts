import { Identifier as Identifier0 } from './../../../../general/feature/identifier';
import { Identifier as Identifier1 } from './../../../../general/block/identifier';
export declare namespace Def {
	type BlockSide = string | Array<string>;
}
export type MinecraftSingleBlockFeature = {
	description: {
		identifier: Identifier0;
	};
	places_block: Identifier1;
	enforce_placement_rules: boolean;
	enforce_survivability_rules: boolean;
	may_attach_to?: {
		min_sides_must_attach?: number;
		auto_rotate?: unknown;
		top?: Def.BlockSide;
		bottom?: Def.BlockSide;
		north?: Def.BlockSide;
		south?: Def.BlockSide;
		east?: Def.BlockSide;
		west?: Def.BlockSide;
		all?: Def.BlockSide;
		sides?: Def.BlockSide;
	};
	may_replace?: Array<Identifier1>;
};
