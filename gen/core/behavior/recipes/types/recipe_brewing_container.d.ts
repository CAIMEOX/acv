import { Definition as Definition0 } from './base types/definition';
import { Tags as Tags0 } from './base types/tags';
import { Unlock as Unlock0 } from './base types/unlock';
export type RecipeBrewingContainer = {
	description: Definition0;
	tags?: Tags0;
	unlock?: Unlock0;
	input?: string;
	output?: string;
	reagent?: string;
};
