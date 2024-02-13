import { Identifier as Identifier0 } from './identifier';
import { String as String0 } from './../../molang/string';
export type Reference =
	| Identifier0
	| {
			name?: Identifier0;
			states?: {
				[prop: string]: 'boolean' | 'integer' | 'string';
			};
			tags?: String0;
	  };
