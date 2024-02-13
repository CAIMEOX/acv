import { Definition as Definition0 } from './base types/definition';
import { Tags as Tags0 } from './base types/tags';
import { Unlock as Unlock0 } from './base types/unlock';
import { Item as Item0 } from './base types/item';
export type RecipeSmithingTransform = {
	description: Definition0;
	tags?: Tags0;
	unlock?: Unlock0;
	base?: Item0 | Array<Item0>;
	addition?: Item0 | Array<Item0>;
	result?: Item0 | Array<Item0>;
};
