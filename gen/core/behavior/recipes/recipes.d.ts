import { Furnace as Furnace0 } from './types/furnace';
import { RecipeBrewingContainer as RecipeBrewingContainer0 } from './types/recipe_brewing_container';
import { RecipeBrewingMix as RecipeBrewingMix0 } from './types/recipe_brewing_mix';
import { RecipeShaped as RecipeShaped0 } from './types/recipe_shaped';
import { RecipeShapeless as RecipeShapeless0 } from './types/recipe_shapeless';
import { RecipeSmithingTransform as RecipeSmithingTransform0 } from './types/recipe_smithing_transform';
export type Recipes = {
	format_version: string;
	'minecraft:recipe_furnace'?: Furnace0;
	'minecraft:recipe_brewing_container'?: RecipeBrewingContainer0;
	'minecraft:recipe_brewing_mix'?: RecipeBrewingMix0;
	'minecraft:recipe_shaped'?: RecipeShaped0;
	'minecraft:recipe_shapeless'?: RecipeShapeless0;
	'minecraft:recipe_smithing_transform'?: RecipeSmithingTransform0;
};
