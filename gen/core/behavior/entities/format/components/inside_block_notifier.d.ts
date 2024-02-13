import { BlockDefinition as BlockDefinition0 } from './../../../../general/block_definition';
import { EventObject as EventObject0 } from './../types/event_object';
export type InsideBlockNotifier = {
	block_list?: Array<{
		block?: BlockDefinition0;
		entered_block_event?: EventObject0;
		exited_block_event?: EventObject0;
	}>;
};
