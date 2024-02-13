import { Filters as Filters0 } from './../../filters/filters';
import { Descriptor as Descriptor0 } from './../../../../general/item/descriptor';
export declare namespace Def {
	type Effect = {
		name?: string;
		duration?: number;
		amplifier?: number;
	};
}
export type Healable = {
	filters?: Filters0;
	force_use?: boolean;
	items?: Array<{
		filters?: Filters0;
		heal_amount?: number;
		item?: Descriptor0;
		effects?: Def.Effect | Array<Def.Effect>;
	}>;
};
