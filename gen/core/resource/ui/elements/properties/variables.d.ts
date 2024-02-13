import { ItemRef as ItemRef0 } from './../../general/item_ref';
export declare namespace Def {
	type Variables = unknown;
}
export type Variables =
	| ItemRef0
	| Array<{
			[prop: string]: Def.Variables;
	  }>
	| {
			[prop: string]: Def.Variables;
	  };
