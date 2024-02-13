import { EventObject as EventObject0 } from './../types/event_object';
export type RailSensor = {
	check_block_types?: boolean;
	eject_on_activate?: boolean;
	eject_on_deactivate?: boolean;
	on_activate?: EventObject0;
	on_deactivate?: EventObject0;
	tick_command_block_on_activate?: boolean;
	tick_command_block_on_deactivate?: boolean;
};
