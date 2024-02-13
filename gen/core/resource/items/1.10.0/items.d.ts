import { Identifier as Identifier0 } from './../../../general/item/identifier';
export type Items = {
	format_version: string;
	'minecraft:item': {
		description: {
			identifier: Identifier0;
			category?: string;
		};
		components: {
			'minecraft:icon'?: string;
			'minecraft:render_offsets'?: 'apple';
		};
	};
};
