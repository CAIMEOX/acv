import { Identifier as Identifier0 } from './../../../../general/feature/identifier';
export type MinecraftAggregateFeature = {
	description: {
		identifier: Identifier0;
	};
	features: Array<string>;
	early_out?: 'none' | 'first_failure' | 'first_success';
};
