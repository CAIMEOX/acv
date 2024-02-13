import { Identifier as Identifier0 } from './../../../../general/feature/identifier';
import { String as String0 } from './../../../../molang/string';
export type MinecraftConditionalList = {
	description: {
		identifier: Identifier0;
	};
	conditional_features: Array<{
		places_feature: Identifier0;
		condition: String0;
	}>;
	early_out_scheme?: 'condition_success' | 'placement_success';
};
