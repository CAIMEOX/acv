import { Identifier as Identifier0 } from './../../../../general/feature/identifier';
import { Identifier as Identifier1 } from './../../../../general/block/identifier';
export type MinecraftOreFeature = {
	description: {
		identifier: Identifier0;
	};
	count: number;
	replace_rules?: Array<{
		places_block: Identifier1;
		may_replace?: Array<Identifier1>;
	}>;
};
