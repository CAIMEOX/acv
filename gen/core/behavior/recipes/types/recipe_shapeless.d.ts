import { Definition as Definition0 } from './base types/definition';
import { Tags as Tags0 } from './base types/tags';
import { Unlock as Unlock0 } from './base types/unlock';
import { Item as Item0 } from './base types/item';
export type RecipeShapeless = {
	description: Definition0;
	tags?: Tags0;
	unlock?: Unlock0;
	ingredients?: Item0 | Array<Item0>;
	group?: string;
	priority?: number;
	result?: Item0 | Array<Item0>;
};
