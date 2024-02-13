import { Descriptor as Descriptor0 } from './../../../../general/item/descriptor';
export type Boostable = {
	duration?: number;
	speed_multiplier?: number;
	boost_items?: Array<{
		damage?: number;
		item?: Descriptor0;
		replace_item?: Descriptor0;
	}>;
};
