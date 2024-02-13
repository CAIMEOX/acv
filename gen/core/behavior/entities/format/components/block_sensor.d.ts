import { Identifier as Identifier0 } from './../../../../general/block/identifier';
import { Filters as Filters0 } from './../../filters/filters';
export type BlockSensor = {
	sensor_radius?: number;
	on_break?: Array<{
		block_list?: Array<Identifier0>;
		on_block_broken?: string;
	}>;
	sources?: Array<Filters0>;
};
