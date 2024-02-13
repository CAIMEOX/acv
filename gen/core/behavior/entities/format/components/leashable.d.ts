import { EventObject as EventObject0 } from './../types/event_object';
export type Leashable = {
	can_be_stolen?: boolean;
	hard_distance?: number;
	max_distance?: number;
	on_leash?: EventObject0;
	on_unleash?: EventObject0;
	soft_distance?: number;
};
