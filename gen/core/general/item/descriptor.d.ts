import { Identifier as Identifier0 } from './identifier';
import { String as String0 } from './../../molang/string';
export declare namespace Def {
	type ObjectItemDescriptor = {
		item?: Identifier0 | Def.ObjectItemDescriptor;
		tags?: String0;
		item_tag?: string;
	};
}
export type Descriptor =
	| Identifier0
	| Def.ObjectItemDescriptor
	| {
			item?: Identifier0 | Def.ObjectItemDescriptor;
	  };
