import { Definition as Definition0 } from './base types/definition';
import { Tags as Tags0 } from './base types/tags';
import { Unlock as Unlock0 } from './base types/unlock';
import { Item as Item0 } from './base types/item';
export type RecipeShaped = {
	description: Definition0;
	tags?: Tags0;
	unlock?: Unlock0;
	key?: {
		[prop: string]: Item0;
	};
	group?: string;
	pattern?: Array<string>;
	priority?: number;
	result?: Item0 | Array<Item0>;
};
