import { EntityProperties as EntityProperties0 } from './conditions/entity_properties';
import { HasMarkVariant as HasMarkVariant0 } from './conditions/has_mark_variant';
import { KilledByPlayer as KilledByPlayer0 } from './conditions/killed_by_player';
import { KilledByPlayerOrPets as KilledByPlayerOrPets0 } from './conditions/killed_by_player_or_pets';
import { RandomChance as RandomChance0 } from './conditions/random_chance';
import { RandomChanceWithLooting as RandomChanceWithLooting0 } from './conditions/random_chance_with_looting';
import { RandomDifficultyChance as RandomDifficultyChance0 } from './conditions/random_difficulty_chance';
import { RandomRegionalDifficultyChance as RandomRegionalDifficultyChance0 } from './conditions/random_regional_difficulty_chance';
export type Conditions =
	| ({
			condition?: 'entity_properties';
	  } & EntityProperties0)
	| ({
			condition?: 'has_mark_variant';
	  } & HasMarkVariant0)
	| ({
			condition?: 'killed_by_player';
	  } & KilledByPlayer0)
	| ({
			condition?: 'killed_by_player_or_pets';
	  } & KilledByPlayerOrPets0)
	| ({
			condition?: 'random_chance';
	  } & RandomChance0)
	| ({
			condition?: 'random_chance_with_looting';
	  } & RandomChanceWithLooting0)
	| ({
			condition?: 'random_difficulty_chance';
	  } & RandomDifficultyChance0)
	| ({
			condition?: 'random_regional_difficulty_chance';
	  } & RandomRegionalDifficultyChance0);
