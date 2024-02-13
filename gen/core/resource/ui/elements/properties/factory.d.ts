import { ControlIds as ControlIds0 } from './control_ids';
import { String as String0 } from './../../general/string';
import { ItemRef as ItemRef0 } from './../../general/item_ref';
export type Factory =
	| {
			control_ids?: ControlIds0;
			control_name?: String0;
			factory_variables?: Array<string> | string;
			name?: string;
	  }
	| ItemRef0;
