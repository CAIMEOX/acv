import { Priority as Priority0 } from './types/priority';
import { Number2 as Number20 } from './../../../../general/vectors/number2';
import { Descriptor as Descriptor0 } from './../../../../general/item/descriptor';
export type JumpToBlock = {
	priority?: Priority0;
	cooldown_range?: Number20;
	forbidden_blocks?: Array<Descriptor0>;
	max_velocity?: number;
	minimum_distance?: number;
	minimum_path_length?: number;
	preferred_blocks?: Array<Descriptor0>;
	preferred_blocks_chance?: number;
	scale_factor?: number;
	search_height?: number;
	search_width?: number;
};
