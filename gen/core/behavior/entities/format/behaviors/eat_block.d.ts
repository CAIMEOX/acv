import { Priority as Priority0 } from './types/priority';
import { Trigger as Trigger0 } from './../types/trigger';
import { Number as Number0 } from './../../../../molang/number';
import { Identifier as Identifier0 } from './../../../../general/block/identifier';
export type EatBlock = {
	priority?: Priority0;
	on_eat?: Trigger0;
	success_chance?: Number0;
	time_until_eat?: number;
	eat_and_replace_block_pairs?: Array<{
		eat_block?: Identifier0;
		replace_block?: Identifier0;
	}>;
};
