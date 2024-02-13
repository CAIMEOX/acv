import { String as String0 } from './../../../../molang/string';
export declare namespace Def {
	type UseOnItem = {
		tags?: String0;
	};
}
export type BlockPlacer = {
	block: string;
	use_on?: Array<Def.UseOnItem>;
};
