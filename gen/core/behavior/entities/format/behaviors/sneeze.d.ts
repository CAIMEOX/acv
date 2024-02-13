import { Priority as Priority0 } from './types/priority';
import { EntityTypes as EntityTypes0 } from './../types/entity_types';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
export type Sneeze = {
	priority?: Priority0;
	cooldown_time?: number;
	drop_item_chance?: number;
	entity_types?: EntityTypes0;
	loot_table?: string;
	prepare_sound?: SoundEvent0;
	prepare_time?: number;
	probability?: number;
	sound?: SoundEvent0;
	within_radius?: number;
};
