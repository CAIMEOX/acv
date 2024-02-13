import { Priority as Priority0 } from './types/priority';
import { EntityTypes as EntityTypes0 } from './../types/entity_types';
export type HurtByTarget = {
	priority?: Priority0;
	entity_types?: EntityTypes0;
	alert_same_type?: boolean;
	hurt_owner?: boolean;
};
