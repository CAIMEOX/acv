import { Priority as Priority0 } from './types/priority';
import { SoundEvent as SoundEvent0 } from './../../../../general/sound_event';
import { Event as Event0 } from './../types/event';
import { EntityTypes as EntityTypes0 } from './../types/entity_types';
export type DefendTrustedTarget = {
	priority?: Priority0;
	aggro_sound?: SoundEvent0;
	attack_interval?: number;
	must_see?: boolean;
	must_see_forget_duration?: number;
	on_defend_start?: Event0;
	within_radius?: number;
	entity_types?: EntityTypes0;
	sound_chance?: number;
};
